import {Component, Input} from '@angular/core';
import {LIST} from './list';

@Component({
  selector: 'app-pattern0',
  template: `
  <p>test</p>
  <ons-list-item *ngFor="let item of lists1">
    <div class="left-side">
      <img class="thumbnail2" src="{{item.img1}}">
    </div>
    <div class="right-side">
      <span class="list-item__title">
        <p class="list_item_title">{{item.date_str}}</p>
        <p class="list_item_memo">{{item.memo_str}}</p>
      </span>
      <img class="big_img2" src="{{item.img2}}">
    </div>
  </ons-list-item>
  <p>test</p>
  `,
  styles: [
  	'./pattern0.css'
  ]
})
export class Pattern0 {

  // @Input() lists1: LIST;
  lists1 = LIST;

  constructor() {}

}
