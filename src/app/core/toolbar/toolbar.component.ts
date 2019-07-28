import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Button } from 'selenium-webdriver';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit, AfterViewInit {
    // Receive menu object and title from the parent 'MainLayoutComponent'
    @Input() menu: Array<Object>;
    @Input() title: string;
    // Raise the event to the parent 'MainLayoutComponent'
    @Output() toggleSidebar = new EventEmitter();

    @ViewChild('btnEnglish')
    private btnEng: ElementRef;

    @ViewChild('btnFrench')
    private btnFrn: ElementRef;

    sidebarOpened = false;
    isFrench = false;


    ngOnInit() {
    }



    constructor(public translate: TranslateService) {
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
    }

    switchLanguage(language: string) {
        console.log(language)
        this.translate.use(language);
    }

    changed() {
        console.log(this.isFrench);
        // this.isFrench = !this.isFrench;
        if (this.isFrench)
            this.switchLanguage('fr');
        else
            this.switchLanguage('en');
    }

    ngAfterViewInit() {
        this.isFrench = false;
    }
    /**
     * Toggle the sidenav menu.
     */
    toggleSidenav() {
        this.sidebarOpened = !this.sidebarOpened;
        this.toggleSidebar.emit(this.sidebarOpened);
    }
}
