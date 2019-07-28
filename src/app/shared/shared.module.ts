import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DialogsModule } from './dialogs/dialogs.module';
import { MaterialFormsModule } from './forms/material-forms.module';
import { SearchModule } from './search/search/search.module';
import { AppSharedPipesModule } from './app-shared-pipes';


@NgModule({
    imports: [
        CommonModule,
        FormsModule, AppSharedPipesModule,
        ReactiveFormsModule],
    declarations: [],
    exports: [
        DialogsModule, SearchModule,
        MaterialFormsModule
    ]
})

export class SharedModule { }

export function TRANSLATE(str: string) {
    return str;
}



