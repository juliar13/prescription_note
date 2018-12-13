import {Component} from '@angular/core';

@Component({
  selector: 'ons-page[home]',
  template: require('./home.html')
})
export class Home {

  src: string='/www/assets/img/test.jpeg';
  title: string='No.1 Date: 2018/12/13';
  memo: string='桜病院での処方';

  constructor() {}

}
