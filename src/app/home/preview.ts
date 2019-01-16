import {Component} from '@angular/core'
import {OnsNavigator, Params} from 'ngx-onsenui'
import {Edit} from './edit'
import {ListData} from './list_data'
import {Datas} from './list_data_sample'

@Component({
  selector: 'ons-page[preview]',
  templateUrl: 'src/app/home/preview.html',
  styles: [
  	'./preview.css'
  ]
})
export class Preview {

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

    // edit.tsでも流用
    get_data_from_db_table(item) {
      console.log("get_data_from_db_table");
      // itemからtableの情報を取ってきて代入してHTMLに表示
      this.get_list.img1 = item.img1;
      this.get_list.date_str = item.date_str;
      this.get_list.memo_str = item.memo_str;
      this.get_list.img2 = item.img2;
    }

    onEditClicked(item) {
      this._navigator.element.pushPage(Edit, {animation: 'simpleslide', data: this.item, }, );
    }

    // onBackClickedに変更すること
    onCloseClicked() {
      this._navigator.element.popPage();
    }

}
