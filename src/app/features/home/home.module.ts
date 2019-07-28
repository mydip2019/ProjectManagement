import { NgModule } from '@angular/core';


import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule, TranslateModule

  ],
  declarations: [
    HomeComponent
  ]
})

export class HomeModule { }
