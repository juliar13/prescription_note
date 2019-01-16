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

    item: ListData[];
    get_list: ListData[] = Datas;

    constructor(
      private _navigator: OnsNavigator,
      private params: Params
    ) {
      this.item = params.data;
      console.log("params.data : " + this.item.date_str);
      this.get_data_from_db_table(this.item);
    }

    // preview.tsでも流用
    get_data_from_db_table(item) {
      console.log("get_data_from_db_table");
      // itemからtableの情報を取ってきて代入してHTMLに表示
      this.get_list.img1 = item.img1;
      this.get_list.date_str = item.date_str;
      this.get_list.memo_str = item.memo_str;
      this.get_list.img2 = item.img2;
    }

    // ホーム画面に戻す
    // 出来ればanimation=liftで
    onCloseClicked() {
      this._navigator.element.popPage();
    }

    // 画像をタッチした時に呼び出される
    onImgChange() {
      // 写真撮影かアルバムからか選択する画面を出す
      isImgChange: Boolean = this.shootOrAlbum();
      // 画像変更されたなら実行
      if(isImgChange){

      }else{

      }

    }

    shootOrAlbum(): Boolean {
      ons.notification.alert('撮影かアルバム画面になる');
      return true;
    }

    // 登録完了ボタンタッチで呼び出される
    onEditEndClicked() {
      let toast_timeout = 2000; // 2000msec
      let registration_success: Boolean = this.database_update();
      if (registration_success == true) {
        ons.notification.toast('Registration Success !!', {timeout: toast_timeout});
      } else {
        // 今はこちらは表示されないようにしてある
        ons.notification.toast('Registration Failed ...', {timeout: toast_timeout});
      }
    }

    database_update():Boolean {
      console.log('database_changing...');
      // 入力フォームなどにあるデータを更新後データとして更新する
      return true;
    }

}
