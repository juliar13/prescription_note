import {Component} from '@angular/core';
import * as ons from 'onsenui';

import {Home} from './home';
import {Setting} from './setting/setting';
import {PrescriptionRecordRepository} from '../service/prescription-record.repository';

@Component({
  selector: 'ons-page[main-tab]',
  template: require('./main-tab.html'),
})
export class MainTab {
  home = Home;
  setting = Setting;

  animation = ons.platform.isAndroid() ? 'slide' : 'none';
  modifier = ons.platform.isAndroid() ? 'material noshadow' : '';

  constructor(
    private _prescriptionRecordRepository: PrescriptionRecordRepository,
  ) {}

  onPlusButtonClick() {
    var ua = navigator.userAgent;

    if (ua.indexOf('iPad') > 0 || ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0) {
      navigator.camera.getPicture(
        (imageURI) => { 
          this.addPictureFile(imageURI);
      },
        (message) => {console.log('error:', message)},
        {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
        }
      )    
    } else {
      var imageURI = "click : "+ new Date();
      this.addPictureFile(imageURI); 
    }
  }

  addPictureFile(imageURI){

    Promise.resolve()
      .then(() => 
        this._prescriptionRecordRepository.addRecord({
          id: null,
          createdDate: new Date().toISOString(),
          updatedDate: new Date(2017, 12, 13).toISOString(),
          imagePath: imageURI,
          note: '',
        }))
      .then(result => this._prescriptionRecordRepository.getRecords())
      .then(result => console.log('record', result))
      .catch(error => console.log('error', error))
  }
}

