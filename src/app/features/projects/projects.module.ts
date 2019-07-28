import { NgModule } from '@angular/core';

//import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectService } from './shared/project.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { NewContactComponent } from './new-contact/new-contact.component';
import { MaterialFormsModule } from '@app/shared/forms/material-forms.module';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { ContactService } from '../contacts/shared/contact.service';
import { AddProjectComponent } from './new-project/add-project.component';
import { DialogsModule } from '../../shared/dialogs/dialogs.module';
import { SharedModule } from '../../shared/shared.module';
import { AppSharedPipesModule } from '../../shared/app-shared-pipes';


@NgModule({
  imports: [
    SharedModule,
    MatDialogModule, // remove this if not used
    MaterialFormsModule,
    ProjectsRoutingModule, AppSharedPipesModule,
    // ProjectResultFormComponent,
    FormsModule, ReactiveFormsModule, DialogsModule, TranslateModule
  ],
  declarations: [
    //  ContactDetailComponent,
    ProjectsListComponent,


    AddProjectComponent,

    // NewContactComponent
  ],
  providers: [
    ProjectService, ContactService
  ],
  entryComponents: [
    // ContactDetailComponent
    AddProjectComponent,
  ]
})

export class ProjectsModule { }