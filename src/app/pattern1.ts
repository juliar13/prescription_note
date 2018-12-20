import {Component, Input} from '@angular/core';
import {LIST} from './list';

@Component({
  selector: 'app-pattern1',
  template: `
  <ons-list-item *ngFor="let item of lists2">
    <div class="top-left">
      <img class="thumbnail" src="{{item.img1}}">
    </div>
    <div class="top-right">
      <span class="list-item__title">
        <p>{{item.date_str}}</p>
        <p>{{item.memo_str}}</p>
      </span>
    </div>
    <div class="bottom-center">
      <img class="big_img" src="{{item.img2}}" (click)="onItemClick()">
    </div>
  </ons-list-item>
  `
})
export class Pattern1 {

  // @Input() lists1: LIST;
  lists2 = LIST;

  constructor() {}

}
