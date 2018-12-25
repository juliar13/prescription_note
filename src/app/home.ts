import {Component} from '@angular/core';
import {PrescriptionRecordRepository} from '../service/prescription-record.repository';

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

  constructor(
    private _prescriptionRecordRepository: PrescriptionRecordRepository,
  ) {
    Promise.resolve()
      .then(() => 
        this._prescriptionRecordRepository.addRecord({
            id: null,
            createdDate: new Date(2017, 12, 12).toISOString(),
            updatedDate: new Date(2017, 12, 13).toISOString(),
            imagePath: '/tmp/path1',
            note: 'test note',
          }))
      .then(() => 
        this._prescriptionRecordRepository.addRecord({
            id: null,
            createdDate: new Date(2017, 12, 14).toISOString(),
            updatedDate: new Date(2017, 12, 14).toISOString(),
            imagePath: '/tmp/path2',
            note: 'test note',
          }))
      .then(() => 
        this._prescriptionRecordRepository.addRecord({
            id: null,
            createdDate: new Date(2017, 12, 15).toISOString(),
            updatedDate: new Date(2017, 12, 15).toISOString(),
            imagePath: '/tmp/path3',
            note: 'test note',
          }))
      .then((result) => this._prescriptionRecordRepository.getRecords())
      .then(result => console.log('record', result))
      .catch(error => console.log('error', error))

  }

}