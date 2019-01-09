import {Component} from '@angular/core'
import {OnsenModule, OnsNavigator, Params} from 'ngx-onsenui'
import {ListData} from './list_data'
import {Datas} from './list_data_sample'
import * as ons from 'onsenui';

@Component({
  selector: 'ons-page[preview]',
  templateUrl: 'src/app/home/edit.html',
  styles: [
  	'./edit.css'
  ]
})
export class Edit {

    num: number;

    get_list: ListData[] = Datas;

    constructor(
      private _navigator: OnsNavigator,
      private params: Params,
    ) {
      this.num = params.data;
      console.log(params.data);
    }

    onCloseClicked() {
      console.log("Back Button Clicked");
      this._navigator.element.popPage();
    }

    // 画像をタッチした時に呼び出される
    onImgChange() {
      console.log("onImgChange");
      // 写真撮影かアルバムからか選択する画面を出す
      this.shootOrAlbum();
    }

    shootOrAlbum() {
      console.log("shootOrAlbum");
      ons.notification.alert('撮影かアルバム画面になる');
    }

    // 登録完了ボタンタッチで呼び出される
    onEditEndClicked() {
      console.log("Registration Button Clicked");
      let toast_timeout = 2000; // 2000msec
      var registration_success = true;
      if (registration_success = true) {
        ons.notification.toast('Registration Success !!', {timeout: toast_timeout});
      } else {
        // 今はこちらは表示されないようにしてある
        ons.notification.toast('Registration Failed ...', {timeout: toast_timeout});
      }

    }

}
