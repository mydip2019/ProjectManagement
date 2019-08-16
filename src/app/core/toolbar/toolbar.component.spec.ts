import { async, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { ToolbarComponent } from './toolbar.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { Location } from "@angular/common";
import {
    TranslateModule,
    TranslateLoader,
    TranslateService
} from '@ngx-translate/core'
import { HttpClient } from '@angular/common/http';
import { HttpLoaderFactory } from '../../app.module';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';
import { Router } from "@angular/router";
import { appRoutes } from './../../app-routing.module';

describe('ToolbarComponent', () => {
    let router: Router;
    let location: Location;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                ToolbarComponent
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [
                RouterTestingModule.withRoutes(appRoutes),
                HttpClientTestingModule, MatCardModule, RouterTestingModule,
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [HttpClient]
                    }
                })
            ],
            providers: [TranslateService]
        });
        router = TestBed.get(Router);
        location = TestBed.get(Location);

        fixture = TestBed.createComponent(ToolbarComponent);
        router.initialNavigation();
    });


    // it("fakeAsync works", fakeAsync(() => {
    //     let promise = new Promise(resolve => {
    //         setTimeout(resolve, 30);
    //     });
    //     let done = false;
    //     promise.then(() => (done = true));
    //     tick(70);
    //     expect(done).toBeTruthy();
    // }));

    it('should create the toolbar component', () => {

        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should have a route(S) link to /', () => {
        fixture.detectChanges();
        const debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
        const index = debugElements.findIndex(de => {
            //  console.log(de.properties['href']);
            return de.properties['href'] === '/';
        });
        expect(index).toBeGreaterThan(-1);
    });

    it('navigate to "" redirects you to /home', () => {
        fixture.detectChanges();
        router.navigate([""]).then(() => {
            expect(location.path()).toBe("/");
        });
    });

    it('navigate to redirects you to /Home', () => {
        fixture.detectChanges();
        router.navigate(["/task"]).then(() => {
            // console.log(location.path());
            // expect(location.path()).toBe("/Task");
        });
    });




    // it('should load translations Default English', async(() => {
    //     spyOn(translate, 'getBrowserLang').and.returnValue('en');
    //     const fixture = TestBed.createComponent(ToolbarComponent);
    //     const compiled = fixture.debugElement.nativeElement;
    //     let debugElement = fixture.debugElement;
    //     translate.use('en');
    //     http.expectOne('/assets/i18n/en.json').flush(TRANSLATIONS_EN);
    //     http.verify();
    //     fixture.detectChanges();
    //     expect(compiled.querySelector('#wsMessage').textContent).toContain(TRANSLATIONS_EN.Main.WelcomeMsg);

    // }));


    // it('should load translations in English', async(() => {
    //     spyOn(translate, 'getBrowserLang').and.returnValue('en');
    //     const fixture = TestBed.createComponent(HomeComponent);
    //     const compiled = fixture.debugElement.nativeElement;
    //     let debugElement = fixture.debugElement;
    //     translate.use('en');
    //     http.expectOne('/assets/i18n/en.json').flush(TRANSLATIONS_EN);
    //     http.verify();
    //     fixture.detectChanges();
    //     expect(compiled.querySelector('#wsMessage').textContent).toContain(TRANSLATIONS_EN.Main.WelcomeMsg);

    // }));

});
