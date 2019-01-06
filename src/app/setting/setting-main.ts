import {Component} from '@angular/core';
import {OnsNavigator} from 'ngx-onsenui'
import {Setting} from './setting'

@Component({
  selector: 'ons-page[setting-main]',
  template: `
  <ons-navigator swipable [page]="page"></ons-navigator>
  `,
  styleUrls: ['/src/app/setting.css']
})
export class SettingMain {
  page = Setting;
  constructor() {}
}