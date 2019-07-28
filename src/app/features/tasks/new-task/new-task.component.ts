import { Component, Input, EventEmitter, Output, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatInputModule, MatDialog, MatDialogRef } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { filter, map, isEmpty } from 'rxjs/operators';
import { ValidationErrors, ValidatorFn, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DataDialogComponent } from '@app/shared/dialogs';
import { managerModel } from '../../../shared/models/managerModel';
import { Logger } from '@app/core';
import { Router } from '@angular/router';
import { ContactService } from '../../contacts/shared/contact.service';
import { Project, ProjectInfo, Manager } from '../../projects/shared/project'
import { Task, TaskInfo } from '../shared/task';
import { TaskService } from '../shared/task.service';
import { Observable } from 'rxjs';
import { ProjectService } from '../../projects/shared/project.service';
import { projectInfoModel } from '../../../shared/models/projectInfoModel';
import { SharedFunctionService } from '../../../core/shared-function.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  @Input() taskForm: FormGroup;
  @ViewChild('stepper') stepper;
  public isChecked: false; public priority: number = 0;
  title = '';
  @Input() type: string;
  @Output() sentTaskEvent = new EventEmitter<any>();
  public users: managerModel[];
  public projects: projectInfoModel[];
  public userfullName: string = '';
  public projectName: string = '';
  public selectedUser: Manager = new Manager();
  public selectedProject: projectInfoModel = new projectInfoModel();
  public retSelectedUser: any;
  public retSelectedProject: any;
  userDataDialog: MatDialogRef<DataDialogComponent>;
  projectDataDialog: MatDialogRef<DataDialogComponent>;
  public task: Task;
  @Input() taskId: number = 0;
  isDisabled = false;
  public startDate: Date = new Date();

  constructor(private formBuilder: FormBuilder, private router: Router,
    private taskService: TaskService, private dialog: MatDialog,
    private contactService: ContactService,
    private projectService: ProjectService, private sharedService: SharedFunctionService,
    private logger: Logger) {
    this.task = this.createTaskStructure(this.taskId);
    this.buildTaskForm();
    this.getProjectManager();
    this.getProjectsInfo()
  }
  ngOnInit() {

    if (this.taskId > 0)
      this.taskService.getTask(this.taskId).subscribe(data => {
        this.task = data;
        if (this.taskId > 0 && this.task.contactId != null && this.task.contactId > 0) {
          this.selectedUser = (this.users.filter(x => x.id === this.task.contactId))[0];
        }


        if (this.taskId > 0 && this.task.projectId != null && this.task.projectId > 0) {
          this.selectedProject = (this.projects.filter(x => x.id === this.task.projectId))[0];
        }

        this.buildTaskForm();
      });
    this.title = this.sharedService.getTranslationWithData('ADD_EDIT_TASK_PG.TITLE', { value: this.type });
  }

  buildTaskForm(): void {

    this.taskForm = this.formBuilder.group({
      'id': [this.task.id],
      'taskName': [this.task.taskName, Validators.required],
      'isParentChecked': [this.task.isParent],
      'startDate': [this.task.startDate],
      'parentTaskId': [this.task.parentTaskId],
      'endDate': [this.task.endDate],
      'priority': [this.task.priority],
      'user': [this.selectedUser.fullName],
      'contactId': [this.selectedUser.id],
      'projectId': [this.selectedProject.id],
      'projectName': [this.selectedProject.projectName],
    });
    //this.projectForm.setValidators(this.comparisonValidator())
  }
  getProjectsInfo() {
    this.projectService.getProjectsInfo()
      .subscribe(data => {
        this.projects = (data);
        console.log(this.projects);
      });

  }
  getProjectManager() {
    this.contactService.getProjectManager()
      .subscribe(data => {
        this.users = (data);
      });
  }

  createTaskStructure(id: number): TaskInfo {
    let taskInfo = new TaskInfo('', id, null, '', false, '', null, null, null, null, '');
    return taskInfo;
  }

  getTask(): Task {
    return {
      ...this.taskForm.value,
    };
  }

  checkChangeEvent() {
    this.isDisabled = !this.isDisabled;
    if (this.isDisabled) {
      this.taskForm.controls['startDate'].setValue('');
      this.taskForm.controls['endDate'].setValue('');
    }
    return;
  }


  //Open Dialog box and pass parameter 
  openUserDataDialog(isAdd: boolean) {
    if (isAdd) {
      //this.selectedManager = null;
    }
    this.userDataDialog = this.dialog.open(DataDialogComponent, {
      data: { fillData: this.users, selectedOne: this.selectedUser, dialogTitle: "Select User" }, disableClose: true, width: '400px', height: '500px'
    });
    this.userDataDialog.afterClosed().pipe()
      .subscribe
      (result => {
        this.retSelectedUser = result;
        if (Object.keys(result).length > 0 && this.retSelectedUser !== null && this.retSelectedUser !== undefined) {
          this.selectedUser = this.retSelectedUser;
          this.userfullName = this.retSelectedUser.fullName; // assing first from array 
          this.taskForm.controls['contactId'].setValue(this.selectedUser.id);
          this.taskForm.controls['user'].setValue(this.selectedUser.fullName);
        }
      });
  }

  invalidForms(): boolean {
    return (this.taskForm.invalid
    );
  }

  save() {
    if (this.invalidForms())
      return;

    const newTask = this.getTask();
    this.logger.log(`New Task: ${newTask}`);

    if (this.task.id > 0) {
      this.taskService.updateTask(newTask).subscribe(result => {
        // if (result) {
        this.taskForm.reset();
        this.sentTaskEvent.emit('');
        //}
      });
    }
    else {
      newTask.id = undefined;

      this.taskService.addTask(newTask).subscribe(result => {
        //  if (result) {
        this.taskForm.reset();
        this.sentTaskEvent.emit('');
        // this.reset();
        // go to Contace List page
        // this.router.navigate(['/']);
        // }
      });
    }
  }

  openProjectsDataDialog(isAdd: boolean) {
    if (isAdd) {
      //this.selectedManager = null;
    }
    this.projectDataDialog = this.dialog.open(DataDialogComponent, {
      data: { fillData: this.projects, selectedOne: this.selectedProject, isProject: true, dialogTitle: "Select Project" },
      disableClose: true, width: '400px', height: '500px'
    });
    this.projectDataDialog.afterClosed().pipe()
      .subscribe
      (result => {
        this.retSelectedProject = result;
        if (Object.keys(result).length && this.retSelectedProject !== null && this.retSelectedProject !== undefined) {
          this.selectedProject = this.retSelectedProject;
          this.projectName = this.retSelectedProject.projectName; // assing first from array 
          this.taskForm.controls['projectId'].setValue(this.selectedProject.id);
          this.taskForm.controls['projectName'].setValue(this.selectedProject.projectName);
        }

      });
  }


}
