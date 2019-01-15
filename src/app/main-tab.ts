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
    this.addPictureFile(); // ブラウザ動作確認用の処理

    /*  ブラウザで動作確認用に一時的にコメントアウトしてます。
    navigator.camera.getPicture(
      (imageURI) => { 
        //console.log('image uri', imageURI);
        this.addPictureFile(imageURI);
    },
      (message) => {console.log('error:', message)},
      {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
      }
    )
    */
  }

  addPictureFile(imageURI){
    if(imageURI === undefined){imageURI = "click: "+new Date();}// ブラウザ動作確認用の処理

    Promise.resolve()
      .then(() => {console.log('add record');})
      .then(() => 
        this._prescriptionRecordRepository.addRecord({
          id: null,
          createdDate: new Date(2017, 12, 12).toISOString(),
          updatedDate: new Date(2017, 12, 13).toISOString(),
          imagePath: imageURI,
          note: 'camera',
        }))
      .then(result => this._prescriptionRecordRepository.getRecords())
      .then(result => console.log('record', result))
      .catch(error => console.log('error', error))
  }
}

