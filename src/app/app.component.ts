import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Angular Project Manager Application';

  menu: Array<Object> = [
    // { name: 'Home', url: '' },
    // { name: 'Contacts', url: 'Contacts' },
    // { name: 'Settings', url: '' },
    { name: 'About me', url: '' }
  ];
}
