import {Page} from 'ionic-framework/ionic';
import {SchedulePage} from '../schedule/schedule';
import {SpeakersPage} from '../speakers/speakers';
import {VenuePage} from '../venue/venue';

// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from 'angular2/core';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: Type = SchedulePage;
  tab2Root: Type = SpeakersPage;
  tab3Root: Type = VenuePage;

  constructor() {

  }
}
