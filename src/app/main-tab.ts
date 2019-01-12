import {Component} from '@angular/core';
import * as ons from 'onsenui';

import {Home} from './home/home';
import {Setting} from './setting/setting';

@Component({
  selector: 'ons-page[main-tab]',
  template: require('./main-tab.html'),
})
export class MainTab {
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
        destinationType: Camera.DestinationType.DATA_URL,
      }
    )
  }
}
