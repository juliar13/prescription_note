import {Component} from '@angular/core';
import {OnsNavigator} from 'ngx-onsenui'
import {About} from './about';

@Component({
  selector: 'ons-page[account]',
  template: `
  <ons-toolbar [attr.modifier]="modifier">
    <div class="left" (click)="onCloseClicked()"><ons-toolbar-button><ons-icon icon="fa-times"></ons-icon></ons-toolbar-button></div>
    <div class="center">個人情報設定</div>
  </ons-toolbar>
  
  
  `,
})
export class Account {
  constructor(
    private _navigator: OnsNavigator,
  ) {}

  onCloseClicked() {
    this._navigator.element.popPage();
  }
}