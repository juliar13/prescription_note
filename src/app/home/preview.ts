import {Component} from '@angular/core';
import {OnsNavigator} from 'ngx-onsenui'

@Component({
  selector: 'ons-page[preview]',
  templateUrl: 'src/app/home/preview.html',
  styles: [
  	'./preview.css'
  ]
})
export class Preview {

    constructor(
      private _navigator: OnsNavigator,
    ) {}

    onCloseClicked() {
      this._navigator.element.popPage();
    }

}
