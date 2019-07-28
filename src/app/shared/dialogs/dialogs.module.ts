import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from "@angular/common";
import { ConfirmedDialogComponent } from './confirmed-dialog/confirmed-dialog.component';
import { DataDialogComponent } from './data-dialog/data-dialog.component';
import { MaterialModule } from '../../material/material.module';
import { ListFilterPipe, SearchComponent } from '.';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
    imports: [
        MatDialogModule, MaterialModule, CommonModule, NgxPaginationModule, TranslateModule
    ],
    declarations: [
        ConfirmedDialogComponent, DataDialogComponent, SearchComponent, ListFilterPipe
    ],
    exports: [
        DataDialogComponent, ConfirmedDialogComponent, MaterialModule,
    ],
    entryComponents: [
        ConfirmedDialogComponent, DataDialogComponent
    ],

})

export class DialogsModule { }
