// Onsen UI Styling and Icons
require('onsenui/css/onsen-css-components.css');
require('onsenui/css/onsenui.css');

// Yamasaki added for css application
require('./app/home/home.css');
require('./app/home/preview.css');
require('./app/home/edit.css');
require('./app/app.css');

// Application code starts here
import {enableProdMode, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpModule} from '@angular/http';
import {OnsenModule} from 'ngx-onsenui';

import {MyApp} from './app/app';
import {Home} from './app/home/home';
import {HomeMain} from './app/home/home-main';
import {Preview} from './app/home/preview';
import {Edit} from './app/home/edit';
import {Setting} from './app/setting/setting';
import {SettingMain} from './app/setting/setting-main';
import {About} from './app/setting/about';
import {Account} from './app/setting/account';
import {MainTab} from './app/main-tab';

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
        HomeMain,
        Preview,
        Edit,
        Setting,
        SettingMain,
        About,
        MainTab,
        Account,
    ],
    entryComponents: [
        Home,
        HomeMain,
        Preview,
        Edit,
        Setting,
        SettingMain,
        About,
        MainTab,
        Account,
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
