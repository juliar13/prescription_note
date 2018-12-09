import {Component} from '@angular/core';
import * as ons from 'onsenui';

import {Home} from './home';
import {Setting} from './setting';

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [
  	'./app.css'
  ]
})
export class MyApp {
  home = Home;
  setting = Setting;

  animation = ons.platform.isAndroid() ? 'slide' : 'none';
  modifier = ons.platform.isAndroid() ? 'material noshadow' : '';

  constructor() {}

  onPlusButtonClick() {
    navigator.camera.getPicture(
      (imageURI) => { console.log('image uri', imageURI) },
      (message) => {console.log('error:', message)},
      {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
      }
    )
  }
}
