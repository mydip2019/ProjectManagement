import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { PageNotFoundComponent } from './page-not-found.component'
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Component: PageNotFoundComponent', () => {

    let component: PageNotFoundComponent;
    let fixture: ComponentFixture<PageNotFoundComponent>;
    let spanText: DebugElement;


    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [PageNotFoundComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        });


        // create component and test fixture
        fixture = TestBed.createComponent(PageNotFoundComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
        //   spanText = fixture.debugElement.query(By.css('text'));

        //  submitEl = fixture.debugElement.query(By.css('button'));

    });

    it('Component loaded PageNotFoundComponent ', () => {
        //  component.enabled = false;
        const app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        expect(app).toBeTruthy();
    });

    it('Page Not found text should be visible & loaded', () => {
        let el = fixture.debugElement.query(By.css('.text'));
        let spanEl = el.nativeElement;
        fixture.detectChanges();
        let val = "Oops, it seems that this page does not exist.";
        // Now we can check to make sure the emitted value is correct
        expect(spanEl.innerHTML).toContain(val);
    });

});