import { async, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MainLayoutComponent } from './main-layout.component';
describe('Main App', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MainLayoutComponent
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            // imports: [
            //     HttpClientTestingModule, MatCardModule,
            //     TranslateModule.forRoot({
            //         loader: {
            //             provide: TranslateLoader,
            //             useFactory: HttpLoaderFactory,
            //             deps: [HttpClient]
            //         }
            //     })
            // ],
            // providers: [TranslateService]
        }).compileComponents();
    }));

    it('should load App Component', async(() => {
        const fixture = TestBed.createComponent(MainLayoutComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

});