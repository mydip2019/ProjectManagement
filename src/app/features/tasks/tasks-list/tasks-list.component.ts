import { Component, HostListener, OnInit, ViewChild, Input, EventEmitter, Output, ChangeDetectionStrategy, ViewContainerRef, ComponentRef, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MatDialog, MatDialogConfig, MatDialogRef, MatInputModule } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { ConfirmedDialogComponent } from '@app/shared/dialogs';
import { Logger } from '@app/core';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';
import { Pipe, PipeTransform } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { filter, map } from 'rxjs/operators';
import { ValidationErrors, ValidatorFn, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})

export class TasksListComponent implements OnInit {
  displayedColumns: string[];
  dataSource = new MatTableDataSource();
  screenHeight: any;
  screenWidth: any;
  public hideAddTask = true;

  @ViewChild("taskContainer", { read: ViewContainerRef }) taskContainer;
  componentRef: ComponentRef<any>;

  loadAddContact() {
    this.hideAddTask = !this.hideAddTask;
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.logger.log(`Resize() height: ${this.screenHeight}; width: ${this.screenWidth}`);
    this.setDisplayedColumns();
  }

  constructor(
    private taskService: TaskService, private formBuilder: FormBuilder,
    private logger: Logger,
    private resolver: ComponentFactoryResolver,
    private dialog: MatDialog) {

    this.screenHeight = window.screen.height;
    this.screenWidth = window.screen.width;
    this.logger.log(`Init() height: ${this.screenHeight}; width: ${this.screenWidth}`);
    this.setDisplayedColumns();
  }


  createComponent(type, id = 0) {
    this.hideAddTask = false;
    this.taskContainer.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(NewTaskComponent);
    this.componentRef = this.taskContainer.createComponent(factory);
    this.componentRef.instance.type = type;
    this.componentRef.instance.taskId = id;
    this.componentRef.instance.sentTaskEvent.subscribe(event => this.receiveSuccess(event));
  }

  ngOnDestroy() {
    //   console.log(this.componentRef);
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  ngOnInit() {
    this.loadTasks();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(data => {
      this.dataSource.data = data;
      //console.log(data);
    });
  }

  closeClick() {
    this.hideAddTask = true;
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  receiveSuccess($event) {
    this.loadTasks();
    this.closeClick();
  }

  editTask(id: number): void {
    this.createComponent('Edit', id);
  }
  endTask(id: number) {
    this.taskService.endTask(id).subscribe(data => { this.loadTasks(); });

  }

  deleteTask(task: Task): void {
    // Create configuration for the dialog
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '200px';
    dialogConfig.width = '400px';
    dialogConfig.data = {
      title: `Delete  ${task.id}- ${task.taskName}`,
      message: 'Are you sure?'
    };

    const dialogRef = this.dialog.open(ConfirmedDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data = this.dataSource.data.filter(e => e != task);
        this.taskService.deleteTask(task).subscribe();
      }
    });
  }


  getFullName(task: Task): string {
    return `${task.taskName}`;
  }



  /**
   * Update a list of table columns to be displayed based on the width of the screen.
   */
  setDisplayedColumns() {
    if (this.screenWidth < 420) {
      this.displayedColumns = ['id', 'taskName', 'parentTaskId', 'action'];
    }
    else if (this.screenWidth >= 420 && this.screenWidth <= 800) {
      this.displayedColumns = ['id', 'taskName', 'parentTaskId', 'priority', 'startDate', 'endDate', 'action'];
    }
    else {
      this.displayedColumns = ['id', 'taskName', 'parentTaskId', 'priority', 'startDate', 'endDate', 'action'];
    }
  }
}

