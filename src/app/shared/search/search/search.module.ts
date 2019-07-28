import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search.component';
import { ListFilterPipe } from '../list-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  //exports: [SearchComponent, ListFilterPipe],
  //declarations: [SearchComponent, ListFilterPipe],
  entryComponents: [
    SearchComponent
  ]
})
export class SearchModule { }
