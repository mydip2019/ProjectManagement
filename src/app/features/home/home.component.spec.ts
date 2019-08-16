import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HomeComponent } from './home.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatCardModule } from '@angular/material';
import {
    TranslateModule,
    TranslatePipe,
    TranslateLoader,
    TranslateService
} from '@ngx-translate/core'
import { Http } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpLoaderFactory } from '../../app.module';

const TRANSLATIONS_EN = require('assets/i18n/en.json');
const TRANSLATIONS_FR = require('assets/i18n/fr.json');


describe('HomeComponent', () => {
    let translate: TranslateService;
    let http: HttpTestingController;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent
            ],
            imports: [
                HttpClientTestingModule, MatCardModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [HttpClient]
                    }
                })
            ],
            providers: [TranslateService]
        }).compileComponents();
        translate = TestBed.get(TranslateService);
        http = TestBed.get(HttpTestingController);
    }));

    it('should create the Home Component', async(() => {
        const fixture = TestBed.createComponent(HomeComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should load translations Default English', async(() => {
        spyOn(translate, 'getBrowserLang').and.returnValue('en');
        const fixture = TestBed.createComponent(HomeComponent);
        const compiled = fixture.debugElement.nativeElement;
        let debugElement = fixture.debugElement;
        translate.use('en');
        http.expectOne('/assets/i18n/en.json').flush(TRANSLATIONS_EN);
        http.verify();
        fixture.detectChanges();
        expect(compiled.querySelector('#wsMessage').textContent).toContain(TRANSLATIONS_EN.Main.WelcomeMsg);

    }));

    it('should load translations in French', async(() => {
        spyOn(translate, 'getBrowserLang').and.returnValue('fr');
        const fixture = TestBed.createComponent(HomeComponent);
        const compiled = fixture.debugElement.nativeElement;
        let debugElement = fixture.debugElement;
        translate.use('fr');
        // the DOM should be empty for now since the translations haven't been rendered yet
        // expect(compiled.querySelector('h2').textContent).toEqual('');

        http.expectOne('/assets/i18n/fr.json').flush(TRANSLATIONS_FR);
        //http.expectNone('../../../assets/i18n/fr.json');

        // Finally, assert that there are no outstanding requests.
        http.verify();

        fixture.detectChanges();
        // the content should be translated to english now
        // expect(compiled.query(By.css('#wsMessage')).textContent).toEqual(TRANSLATIONS_EN.Main.WelcomeMsg);
        expect(compiled).toBeTruthy();
        expect(compiled.querySelector('#wsMessage').textContent).toContain(TRANSLATIONS_FR.Main.WelcomeMsg);


        //   translate.use('fr');
        //   http.expectOne('/assets/i18n/fr.json').flush(TRANSLATIONS_FR);

        //   // Finally, assert that there are no outstanding requests.
        //   http.verify();

        //   // the content has not changed yet
        // expect(compiled.querySelector('h2').textContent).toEqual(TRANSLATIONS_EN.Main.WelcomeMsg);

        //   fixture.detectChanges();
        //   // the content should be translated to french now
        //   expect(compiled.querySelector('h2').textContent).toEqual(TRANSLATIONS_FR.HOME.TITLE);
    }));

    it('should load translations in English', async(() => {
        spyOn(translate, 'getBrowserLang').and.returnValue('en');
        const fixture = TestBed.createComponent(HomeComponent);
        const compiled = fixture.debugElement.nativeElement;
        let debugElement = fixture.debugElement;
        translate.use('en');
        http.expectOne('/assets/i18n/en.json').flush(TRANSLATIONS_EN);
        http.verify();
        fixture.detectChanges();
        expect(compiled.querySelector('#wsMessage').textContent).toContain(TRANSLATIONS_EN.Main.WelcomeMsg);

    }));


    // it('should load translations', async(() => {
    //     spyOn(translate, 'getBrowserLang').and.returnValue('en');
    //     const fixture = TestBed.createComponent(HomeComponent);
    //     const compiled = fixture.debugElement.nativeElement;
    //     let debugElement = fixture.debugElement;
    //     translate.use('en');
    //     // the DOM should be empty for now since the translations haven't been rendered yet
    //     // expect(compiled.querySelector('h2').textContent).toEqual('');

    //     http.expectOne('/assets/i18n/en.json').flush(TRANSLATIONS_EN);
    //     //http.expectNone('../../../assets/i18n/fr.json');

    //     // Finally, assert that there are no outstanding requests.
    //     http.verify();

    //     fixture.detectChanges();
    //     // the content should be translated to english now
    //     // expect(compiled.query(By.css('#wsMessage')).textContent).toEqual(TRANSLATIONS_EN.Main.WelcomeMsg);
    //     expect(compiled).toBeTruthy();
    //     expect(compiled.querySelector('#wsMessage').textContent).toContain(TRANSLATIONS_EN.Main.WelcomeMsg);


    //     //   translate.use('fr');
    //     //   http.expectOne('/assets/i18n/fr.json').flush(TRANSLATIONS_FR);

    //     //   // Finally, assert that there are no outstanding requests.
    //     //   http.verify();

    //     //   // the content has not changed yet
    //     // expect(compiled.querySelector('h2').textContent).toEqual(TRANSLATIONS_EN.Main.WelcomeMsg);

    //     //   fixture.detectChanges();
    //     //   // the content should be translated to french now
    //     //   expect(compiled.querySelector('h2').textContent).toEqual(TRANSLATIONS_FR.HOME.TITLE);
    // }));
});