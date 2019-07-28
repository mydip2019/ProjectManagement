import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import 'hammerjs'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorIntl } from '@angular/material';
import { MatPaginatorI18nService } from './core/custom-mat-paginator-int';



// AoT requires an exported function for factories
// export function HttpLoaderFactory(httpClient: HttpClient) {
//     return new TranslateHttpLoader(httpClient);
// }

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function TRANSLATE(str: string) {
    return str;
}

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule, NgxPaginationModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
    declarations: [
        AppComponent,

    ],
    providers: [
        // {
        //     provide: MatPaginatorIntl, useFactory: (translate) => {
        //         const service = new PaginatorIntlService();
        //         service.injectTranslateService(translate);
        //         return service;
        //     }, deps: [TranslateService]
        // }
        {
            provide: MatPaginatorIntl,
            useClass: MatPaginatorI18nService
        }
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }



