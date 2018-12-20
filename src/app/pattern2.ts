import {Component, Input} from '@angular/core';
import {LIST} from './list';

@Component({
  selector: 'app-pattern2',
  template: `
  <ons-list-item expandable *ngFor="let item of lists3">
    <div class="left">
      <img class="list-item__thumbnail" src="{{item.img1}}">
    </div>
    <div class="center">
      <span class="list-item__title">{{item.date_str}}</span>
      <span class="list-item__subtitle">{{item.memo_str}}</span>
    </div>
    <div class="expandable-content">
      <img class="expandable-img" src="{{item.img2}}">
    </div>
  </ons-list-item>
  `
})
export class Pattern2 {

  // @Input() lists1: LIST;
  lists3 = LIST;

  constructor() {}

}
