import {Component} from '@angular/core';
import {OnsNavigator} from 'ngx-onsenui'
import {About} from './about';
import {InquiryComponent} from './inquiry';


@Component({
  selector: 'ons-page[setting]',
  template: require('./setting.html'),
  styleUrls: ['/src/app/setting/setting.css']
})
export class Setting {
  constructor(
    private _navigator: OnsNavigator,
  ) {}

  onAboutClicked() {
    this._navigator.element.pushPage(About, {animation: 'lift'});
  }

  onInquiryClicked() {
    this._navigator.element.pushPage(InquiryComponent, {animation: 'lift'});
  }
}