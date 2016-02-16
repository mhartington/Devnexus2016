import {Page, NavParams} from 'ionic-framework/ionic';
import {Markdown} from '../../pipes/markdown'
@Page({
  templateUrl: 'build/pages/speaker-detail/speaker-detail.html',
  pipes: [Markdown]
})
export class SpeakerDetailPage {
  person
  constructor(
    public params: NavParams
    ) {
    this.person = this.params.get('speaker')
  }
}
