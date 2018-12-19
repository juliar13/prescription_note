import {Component,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'ons-page[home]',
  templateUrl: 'src/app/home.html',
  styles: [
  	'./home.css'
  ]
})
export class Home {

@Input()  size: number | string;
@Output() sizeChange = new EventEmitter<number>();

@Input() height_size: number | string;
@Output() heightChange = new EventEmitter<number>();

dec_img() { this.resizeHeight(-100); }
inc_img() { this.resizeHeight(+100); }

height_size=100;
size=10;

dec() { this.resize(-1); }
inc() { this.resize(+1); }

resizeHeight(delta: number){
  this.height_size = this.height_size+delta;
  this.heightChange.emit(this.height_size);
}

resize(delta: number) {
  this.size = Math.min(40, Math.max(8, +this.size + delta));
  this.sizeChange.emit(this.size);
}

  user_image: string='/www/assets/img/user.png';
  big_image: string='/www/assets/img/test.jpeg';

  title: string='No.1 Date: 2018/12/13';
  memo: string='桜病院での処方';

  lists1: {img1: string, date_str: string, memo_str: string, img2: string}[]=[
    {
      img1: '/www/assets/img/user.png',
      date_str: 'No.1 Date: 2018/12/13',
      memo_str: 'メモテスト',
      img2: '/www/assets/img/test.jpeg',
    },
    {
      img1: '/www/assets/img/user.png',
      date_str: 'No.2 Date: 2018/12/13',
      memo_str: 'I am yamasaki',
      img2: '/www/assets/img/test.jpeg',
    },
    {
      img1: '/www/assets/img/user.png',
      date_str: 'No.3 Date: 2018/12/13',
      memo_str: '桜病院fsfpqafでの処方',
      img2: '/www/assets/img/test.jpeg',
    },
    {
      img1: '/www/assets/img/user.png',
      date_str: 'No.4 Date: 2018/12/13',
      memo_str: '桜病院fs;afj;jfafでの処方',
      img2: '/www/assets/img/test.jpeg',
    },
  ];

  lists2: {img1: string, date_str: string, memo_str: string, img2: string}[]=[
    {
      img1: '/www/assets/img/user.png',
      date_str: 'No.1 Date: 2018/12/13',
      memo_str: 'メモテスト',
      img2: '/www/assets/img/test.jpeg',
    },
    {
      img1: '/www/assets/img/user.png',
      date_str: 'No.2 Date: 2018/12/13',
      memo_str: 'I am yamasaki',
      img2: '/www/assets/img/test.jpeg',
    },
    {
      img1: '/www/assets/img/user.png',
      date_str: 'No.3 Date: 2018/12/13',
      memo_str: '桜病院fsfpqafでの処方',
      img2: '/www/assets/img/test.jpeg',
    },
    {
      img1: '/www/assets/img/user.png',
      date_str: 'No.4 Date: 2018/12/13',
      memo_str: '桜病院fs;afj;jfafでの処方',
      img2: '/www/assets/img/test.jpeg',
    },
  ];

  lists3: {img1: string, date_str: string, memo_str: string, img2: string}[]=[
    {
      img1: '/www/assets/img/user.png',
      date_str: 'No.1 Date: 2018/12/13',
      memo_str: 'メモテスト',
      img2: '/www/assets/img/test.jpeg',
    },
    {
      img1: '/www/assets/img/user.png',
      date_str: 'No.2 Date: 2018/12/13',
      memo_str: 'I am yamasaki',
      img2: '/www/assets/img/test.jpeg',
    },
    {
      img1: '/www/assets/img/user.png',
      date_str: 'No.3 Date: 2018/12/13',
      memo_str: '桜病院fsfpqafでの処方',
      img2: '/www/assets/img/test.jpeg',
    },
    {
      img1: '/www/assets/img/user.png',
      date_str: 'No.4 Date: 2018/12/13',
      memo_str: '桜病院fs;afj;jfafでの処方',
      img2: '/www/assets/img/test.jpeg',
    },
  ];

  lists4: {img1: string, date_str: string, memo_str: string, img2: string}[]=[
    {
      img1: '/www/assets/img/user.png',
      date_str: 'No.1 Date: 2018/12/13',
      memo_str: 'メモテスト',
      img2: '/www/assets/img/test.jpeg',
    },
    {
      img1: '/www/assets/img/user.png',
      date_str: 'No.2 Date: 2018/12/13',
      memo_str: 'I am yamasaki',
      img2: '/www/assets/img/test.jpeg',
    },
    {
      img1: '/www/assets/img/user.png',
      date_str: 'No.3 Date: 2018/12/13',
      memo_str: '桜病院fsfpqafでの処方',
      img2: '/www/assets/img/test.jpeg',
    },
    {
      img1: '/www/assets/img/user.png',
      date_str: 'No.4 Date: 2018/12/13',
      memo_str: '桜病院fs;afj;jfafでの処方',
      img2: '/www/assets/img/test.jpeg',
    },
  ];

  // アラートは多分使わないからそのうち消す
  onItemClick(): Void {
    alert('test');
  }

  constructor() {}

}
