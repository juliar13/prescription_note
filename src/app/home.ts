import {Component,EventEmitter,Input,Output} from '@angular/core';
import { LIST } from './list';

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

  size=10;
  height_size=100;

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  dec_img() { this.resizeHeight(-100); }
  inc_img() { this.resizeHeight(+100); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

  resizeHeight(delta: number){
    this.height_size = this.height_size+delta;
    this.heightChange.emit(this.height_size);
  }

  user_image: string='/www/assets/img/user.png';
  big_image: string='/www/assets/img/test.jpeg';

  title: string='No.1 Date: 2018/12/13';
  memo: string='桜病院での処方';

  lists1 = LIST;
  lists2 = LIST;
  lists3 = LIST;
  lists4 = LIST;

  // アラートは多分使わないからそのうち消す
  onItemClick(): Void {
    alert('test');
  }

  constructor() {}

}
