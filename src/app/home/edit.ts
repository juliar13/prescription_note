import {Component} from '@angular/core'
import {OnsNavigator} from 'ngx-onsenui'

@Component({
  selector: 'ons-page[preview]',
  templateUrl: 'src/app/home/edit.html',:// WARNING:
  styles: [
  	'./edit.css'
  ]
})
export class Edit {

    constructor(
      private _navigator: OnsNavigator,
    ) {}

    onCloseClicked() {
      console.log("Back Button Clicked");
      this._navigator.element.popPage();
    }

    onEditEndClicked() {
      console.log("Edit End Button Clicked");
    }

}
