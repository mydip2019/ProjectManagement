import { NgModule } from '@angular/core';
import { MaterialFormsModule } from '@app/shared/forms/material-forms.module';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskService } from './shared/task.service';
import { SharedModule } from '../../shared/shared.module';
import { FormatDateTextPipe } from '../../shared/format-date-text.pipe';
import { AppSharedPipesModule } from '../../shared/app-shared-pipes';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogsModule } from '../../shared/dialogs/dialogs.module';
import { NewTaskComponent } from './new-task/new-task.component';
import { ContactService } from '../contacts/shared/contact.service';
import { ProjectService } from '../projects/shared/project.service';
import { TaskResultFormComponent } from './task-result-form/task-result-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        SharedModule, AppSharedPipesModule, MatDialogModule, TranslateModule, CommonModule,
        MaterialFormsModule,
        TasksRoutingModule, FormsModule, ReactiveFormsModule, DialogsModule
    ],
    declarations: [

        TasksListComponent,

        NewTaskComponent,

        TaskResultFormComponent,

    ],
    exports: [],

    providers: [
        TaskService, ContactService, ProjectService
    ],
    entryComponents: [NewTaskComponent

    ]
})

export class TasksModule { }
