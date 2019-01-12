// Onsen UI Styling and Icons
require('onsenui/css/onsen-css-components.css');
require('onsenui/css/onsenui.css');

// Mizoguchi added for css application
require('./app/setting/about.css');

// Application code starts here
import {enableProdMode, NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {HttpModule} from '@angular/http';
import {OnsenModule} from 'ngx-onsenui';

import {MyApp} from './app/app';
import {Home} from './app/home';
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
        Setting,
        SettingMain,
        About,
        MainTab,
        Account,
    ],
    entryComponents: [
        Home,
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
