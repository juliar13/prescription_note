import {Component} from '@angular/core';
import {MainTab} from './main-tab';

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [
  	'./app.css'
  ]
})
export class MyApp {
  page = MainTab;
}