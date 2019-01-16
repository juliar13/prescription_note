import {Component} from '@angular/core';
import {OnsNavigator} from 'ngx-onsenui'
import {Home} from './home'

@Component({
  selector: 'ons-page[home-main]',
  template: `
  <ons-navigator swipable [page]="page"></ons-navigator>
  `,
  styleUrls: ['/src/app/setting.css']
})
export class HomeMain {
  page = Home;
  constructor() {}
}
