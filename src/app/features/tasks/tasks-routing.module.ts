import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksListComponent } from './tasks-list/tasks-list.component';


const tasksRoutes: Routes = [
    // 1st Route
    { path: '', component: TasksListComponent },

];

@NgModule({
    imports: [
        RouterModule.forChild(tasksRoutes)
    ],
    exports: [
        RouterModule,
    ]
})

export class TasksRoutingModule { }