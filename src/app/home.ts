import {Component} from '@angular/core';

@Component({
  selector: 'ons-page[home]',
  template: `
    <div class="content">
      <p>I am the first tab.</p>
      <p> 20181213 1010 yamasaki added</p>
      <ul>
        <li> list 1</li>
        <li> list 2</li>
      </ul>
    </div>
  `
})
export class Home {
  constructor() {}
}
