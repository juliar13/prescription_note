import {Component} from '@angular/core';
import {PrescriptionRecordRepository} from '../../service/prescription-record.repository';

@Component({
  selector: 'ons-page[home]',
  templateUrl: 'src/app/home/home.html',
  styles: [
  	'./home.css'
  ]
})
export class Home {

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
    {
      img1: '/www/assets/img/user.png',
      date_str: 'No.4 Date: 2018/12/13',
      memo_str: '桜病院fs;afj;jfafでの処方',
      img2: '/www/assets/img/test.jpeg',
    },
    {
      img1: '/www/assets/img/user.png',
      date_str: 'No.4 Date: 2018/12/13',
      memo_str: '桜病院fs;afj;jfafでの処方',
      img2: '/www/assets/img/test.jpeg',
    },
    {
      img1: '/www/assets/img/user.png',
      date_str: 'No.4 Date: 2018/12/13',
      memo_str: '桜病院fs;afj;jfafでの処方',
      img2: '/www/assets/img/test.jpeg',
    },
    {
      img1: '/www/assets/img/user.png',
      date_str: 'No.4 Date: 2018/12/13',
      memo_str: '桜病院fs;afj;jfafでの処方',
      img2: '/www/assets/img/test.jpeg',
    },
    {
      img1: '/www/assets/img/user.png',
      date_str: 'No.4 Date: 2018/12/13',
      memo_str: '桜病院fs;afj;jfafでの処方',
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
