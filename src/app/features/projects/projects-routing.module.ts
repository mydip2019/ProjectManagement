import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsListComponent } from './projects-list/projects-list.component';
//import { NewProjectComponent } from './new-project/new-project.component';

const projectsRoutes: Routes = [
  // 1st Route
  { path: '', component: ProjectsListComponent },
  // 2nd Route
  //  { path: 'add-project', component: NewProjectComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(projectsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ProjectsRoutingModule { }