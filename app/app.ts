import {App, Platform} from 'ionic-framework/ionic';
import {TabsPage} from './pages/tabs/tabs';
import {Data} from './providers/data/data'
// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from 'angular2/core';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [Data],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: Type = TabsPage;
  constructor(platform: Platform) {
    platform.ready().then(() => { });
  }
}
