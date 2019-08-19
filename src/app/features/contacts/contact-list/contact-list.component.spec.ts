
import { ContactListComponent } from './contact-list.component';
import { async, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule, MatTableModule, MatTooltipModule, MatSnackBarModule, MatDialogModule } from '@angular/material';
import { ContactService } from '../shared/contact.service'
import { Location } from "@angular/common";
import {
    TranslateModule,
    TranslateLoader,
    TranslateService
} from '@ngx-translate/core'
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from '../../../app.module';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';
import { Router } from "@angular/router";

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

describe('ContactList', () => {
    let contactService: ContactService;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ContactListComponent
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [
                HttpClientTestingModule, MatCardModule, MatTableModule,
                MatTooltipModule, MatDialogModule,
                MatSnackBarModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [HttpClient]
                    }
                })
            ],
            providers: [TranslateService, ContactService]
        }).compileComponents();

        // ContactService provided to the TestBed
        contactService = TestBed.get(ContactService);

    }));

    it('should load ContactList Component', async(() => {
        const fixture = TestBed.createComponent(ContactListComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

});