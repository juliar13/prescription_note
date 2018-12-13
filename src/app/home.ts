import {Component} from '@angular/core';

@Component({
  selector: 'ons-page[home]',
  template: require('./home.html')
})
export class Home {
  src: string='/www/assets/img/test.jpeg';
  constructor() {}
}
