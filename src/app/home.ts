import {Component} from '@angular/core';

@Component({
  selector: 'ons-page[home]',
  template: require('./home.html'),
  styles: [
  	'./home.css'
  ]
})
export class Home {

  user_image: string='/www/assets/img/user.png';
  big_image: string='/www/assets/img/test.jpeg';

  title: string='No.1 Date: 2018/12/13';
  memo: string='桜病院での処方';

  // アラートは多分使わないからそのうち消す
  onItemClick(): Void {
    alert('test');
  }

  constructor() {}

}
