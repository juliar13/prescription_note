import {Component} from '@angular/core';
import {OnsNavigator} from 'ngx-onsenui';

@Component({
  selector: 'ons-page[about]',
  template: require('./about.html'),
  styles: ['./about.css']
})
export class About {
  constructor(
    private _navigator: OnsNavigator,
  ) {}

  onCloseClicked() {
    this._navigator.element.popPage();
  }
}