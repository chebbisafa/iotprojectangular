import { Component } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})

export class ContactComponent {
  // Google map lat-long
  lng: number = 10.1933700;
  lat: number = 36.8601200;

}
