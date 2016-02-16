import {Page, NavParams, NavController} from 'ionic-framework/ionic';
import {SpeakersPage} from '../speakers/speakers'
import {Markdown} from '../../pipes/markdown'
@Page({
  templateUrl: 'build/pages/session-detail/session-detail.html',
  pipes: [Markdown]
})
export class SessionDetailPage {
  session;
  constructor(
    public params: NavParams,
    public nav: NavController) {
    this.session = params.get('session')
  }

  speakersDetail(speakers) {
    this.nav.push(SpeakersPage, {
      'speakers': speakers
    })
  }
}
