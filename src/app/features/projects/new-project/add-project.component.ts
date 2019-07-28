import { ChangeDetectionStrategy } from '@angular/core';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { filter, map } from 'rxjs/operators';
import { ValidationErrors, ValidatorFn } from '@angular/forms'
import { DataDialogComponent } from '@app/shared/dialogs';
import { MatDialog, MatDialogRef } from '@angular/material';
import { managerModel } from '../../../shared/models/managerModel';

import { Component, Input, EventEmitter, Output, ViewChild, OnInit } from '@angular/core';
import { Logger } from '@app/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ContactService } from '../../contacts/shared/contact.service';

import { Project, ProjectInfo, Manager } from '../shared/project'
import { ProjectService } from '../shared/project.service';
import { Observable } from 'rxjs';
import { SharedFunctionService } from '../../../core/shared-function.service';

@Component({
  selector: "alert",
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
  // template: `
  //   <h1 (click)="output.next('output')">Alert {{type}}</h1>
  // `,
})
export class AddProjectComponent implements OnInit {
  @Input() projectForm: FormGroup;
  @ViewChild('stepper') stepper;

  public startDate: Date;
  minDate = new Date(2019, 5, 1);
  maxDate = new Date(2020, 5, 1);
  public endDate: Date;
  title = '';
  @Input() type: string;
  @Output() sentProjEvent = new EventEmitter<any>();
  public managers: managerModel[];
  public managerfullName: string = '';
  public selectedManager: Manager = new Manager();
  public retSelectedManager: any;
  @Input() projectId: number = 0;
  projectManagerDataDialog: MatDialogRef<DataDialogComponent>;
  public project: Project;
  isDisabled = true;
  public priority: number = 0;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private projectService: ProjectService, private dialog: MatDialog,
    private contactService: ContactService,
    private sharedService: SharedFunctionService,
    private logger: Logger) {

    this.project = this.createProjectStructure(this.projectId);
    this.buildProjectForm(this.project);
    this.getProjectManager();
  }
  ngOnInit() {

    if (this.projectId > 0)
      this.projectService.getProject(this.projectId).subscribe(data => {
        this.project = data;
        //  this.logger.log(`New managers: ${JSON.stringify(this.managers)}`);
        if (this.projectId > 0 && this.project.contactId != null && this.project.contactId > 0) {
          this.selectedManager = (this.managers.filter(x => x.id == this.project.contactId))[0];
        }
        this.buildProjectForm(data);
        this.isDisabled = !this.project.isSetDate;
      });

    this.title = this.sharedService.getTranslationWithData('ADDEDITPROJECTPG.TITLE', { value: this.type });
    console.log(this.title);
  }
  onChange($event: Event) {
    this.isDisabled = !this.isDisabled;
    if (this.isDisabled) {
      this.projectForm.controls['startDate'].setValue('');
      this.projectForm.controls['endDate'].setValue('');
    }
    return;
  }
  createProjectStructure(id: number): ProjectInfo {
    let prjInfo = new ProjectInfo('', id, false, '', null, null, null);
    return prjInfo;
  }
  getProject(): Project {
    return {
      ...this.projectForm.value,
    };
  }
  getProjectManager() {

    this.contactService.getProjectManager()
      .subscribe(data => {
        this.managers = (data);
      });



  }
  invalidForms(): boolean {
    return (this.projectForm.invalid
    );
  }
  save() {
    if (this.invalidForms())
      return;

    const newProject = this.getProject();
    this.logger.log(`New Project: ${newProject}`);

    if (this.project.id > 0) {
      this.projectService.updateProject(newProject).subscribe(result => {
        // if (result) {
        this.projectForm.reset();
        this.sentProjEvent.emit('');
        //}
      });
    }
    else {
      newProject.id = undefined;
      this.projectService.addProject(newProject).subscribe(result => {
        //  if (result) {
        this.projectForm.reset();
        this.sentProjEvent.emit('');
        // this.reset();
        // go to Contace List page
        // this.router.navigate(['/']);
        // }
      });
    }
  }
  buildProjectForm(project: Project): void {
    this.project = project;
    this.projectForm = this.formBuilder.group({
      'id': [this.project.id],
      'projectName': [this.project.projectName, Validators.required],
      'isSetDate': [this.project.isSetDate],
      'startDate': [this.project.startDate],
      'endDate': [this.project.endDate],
      'priority': [this.project.priority],
      'projectManager': [this.selectedManager.fullName],
      'contactId': [this.selectedManager.id]
    });

    //this.projectForm.setValidators(this.comparisonValidator())
  }

  //Open Dialog box and pass parameter 
  openDataDialog(isAdd: boolean) {
    if (isAdd) {
      //this.selectedManager = null;
    }
    this.projectManagerDataDialog = this.dialog.open(DataDialogComponent, {
      data: { fillData: this.managers, selectedOne: this.selectedManager }, disableClose: true, width: '400px', height: '500px'
    });
    this.projectManagerDataDialog.afterClosed().pipe()
      .subscribe
      (result => {
        this.retSelectedManager = result;
        if (Object.keys(result).length > 0 && this.retSelectedManager !== null && this.retSelectedManager !== undefined) {
          this.selectedManager = this.retSelectedManager;
          this.managerfullName = this.retSelectedManager.fullName; // assing first from array 
          this.projectForm.controls['contactId'].setValue(this.selectedManager.id);
          this.projectForm.controls['projectManager'].setValue(this.selectedManager.fullName);
        }
      });
  }

}
