import {Component} from '@angular/core';

@Component({
  selector: 'ons-page[about]',
  template: `
    <div class="content">
      <p class="center" style="text-align:center;font-weight:bold;margin-bottom:3rem;">このアプリについて</p>

      <div class="center" style="text-align:center;margin-bottom:2rem;">アプリバージョン<br>xxxxxxxx</div>

      <div class="center"  style="text-align:center;margin-bottom:2rem;">バージョンノート<br>xxxxxxxx</div>
    </div>
  `
})
export class About {
  constructor() {}
}


