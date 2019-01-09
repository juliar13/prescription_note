import {Component} from '@angular/core'
import {OnsNavigator, Params} from 'ngx-onsenui'

@Component({
  selector: 'ons-page[preview]',
  templateUrl: 'src/app/home/edit.html',
  styles: [
  	'./edit.css'
  ]
})
export class Edit {

    num: number;

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

    onEditEndClicked() {
      console.log("Edit End Button Clicked");
    }

}
