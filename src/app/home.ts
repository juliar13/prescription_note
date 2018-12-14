import {Component} from '@angular/core';

@Component({
  selector: 'ons-page[home]',
  template: require('./home.html'),
  styles: [
  	'./home.css'
  ]
})
export class Home {

  user_image: string='/www/assets/img/test.jpeg';
  big_image: string='/www/assets/img/test.jpeg';

  title: string='No.1 Date: 2018/12/13';
  memo: string='桜病院での処方';
  let list: { date: string; memo: string }[] = [

      {
        date: 'Date: 2018/12/13',
        memo: '桜病院での処方'
      },
      {
        date: 'Date: 2018/12/13',
        memo: '桜病院での処方'
      },
      {
        date: 'Date: 2018/12/13',
        memo: '桜病院での処方'
      },
      {
        date: 'Date: 2018/12/13',
        memo: '桜病院での処方'
      },
      {
        date: 'Date: 2018/12/13',
        memo: '桜病院での処方'
      },
  ];

  constructor() {}

}
