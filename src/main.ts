// Onsen UI Styling and Icons
require('onsenui/css/onsen-css-components.css');
require('onsenui/css/onsenui.css');

// Yamasaki added for css application
require('./app/home.css');
require('./app/app.css');
require('./app/pattern0.css');

// Application code starts here
import {enableProdMode, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpModule} from '@angular/http';
import {OnsenModule} from 'ngx-onsenui';

import {MyApp} from './app/app';
import {Home} from './app/home';
import {Setting} from './app/setting';
import {About} from './app/about';
import {Pattern0} from './app/pattern0';
import {Pattern1} from './app/pattern1';
import {Pattern2} from './app/pattern2';
import {Pattern3} from './app/pattern3';

// Enable production mode when in production mode.
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

@NgModule({
    imports: [
        OnsenModule, // has BrowserModule internally
        HttpModule,
    ],
    declarations: [
        MyApp,
        Home,
        Setting,
        About,
        Pattern0,
        Pattern1,
        Pattern2,
        Pattern3,
    ],
    entryComponents: [
        Home,
        Setting,
        About,
    ],
    bootstrap: [
        MyApp,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
    ],
})
class AppModule {}

if (module['hot']) module['hot'].accept();

platformBrowserDynamic().bootstrapModule(AppModule)
.catch(err => console.error(err));
