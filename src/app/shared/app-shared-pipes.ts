import { NgModule } from "@angular/core";
import { FormatDateTextPipe } from "./format-date-text.pipe";

 

@NgModule({
  imports: [
    // dep modules
  ],
  declarations: [ 
    FormatDateTextPipe
  ],
  exports: [
    FormatDateTextPipe
  ]
})
export class AppSharedPipesModule {}