import {Component, Input} from '@angular/core';
import {LIST} from './list';

@Component({
  selector: 'app-pattern3',
  template: `0
  <p>pattern 3</p>
  <ons-list-item *ngFor="let item of lists4">
    <div class="top-pattern3">
      <span class="list-item__title">
        <p class="list_item_title">{{item.date_str}}</p>
        <p class="list_item_memo">{{item.memo_str}}</p>
      </span>
      <img class="big_img2" src="{{item.img2}}" (click)="onItemClick()">
    </div>
  </ons-list-item>
  `
})
export class Pattern3 {

  // @Input() lists1: LIST;
  lists4 = LIST;

  constructor() {}

}
