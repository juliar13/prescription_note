import {Component} from '@angular/core'
import {OnsNavigator, Params} from 'ngx-onsenui'
import {Edit} from './edit'

@Component({
  selector: 'ons-page[preview]',
  templateUrl: 'src/app/home/preview.html',
  styles: [
  	'./preview.css'
  ]
})
export class Preview {

    num: number;

    constructor(
      private _navigator: OnsNavigator,
      private params: Params
    ) {
      this.num = params.data;
      console.log(params.data);
    }

    onEditClicked() {
      console.log("Edit Button Clicked");
      this._navigator.element.pushPage(Edit, {animation: 'lift', data: this.num, }, );
    }

    onCloseClicked() {
      console.log("Back Button Clicked");
      this._navigator.element.popPage();
    }

}
