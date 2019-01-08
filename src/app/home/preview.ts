import {Component} from '@angular/core';
import {OnsNavigator} from 'ngx-onsenui'

@Component({
  selector: 'ons-page[preview]',
  template: `
    <p>test preview</p>
  `,
  styles: [
  	'./home.css'
  ]
})
export class Preview {

    constructor(
      private _navigator: OnsNavigator,
    ) {}

}
