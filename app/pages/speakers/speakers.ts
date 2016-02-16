import {Page, NavParams, NavController} from 'ionic-framework/ionic';
import {Data} from '../../providers/data/data'
import {SpeakerDetailPage} from '../speaker-detail/speaker-detail'
import {OrderByPipe, FilterArrayPipe} from '../../pipes/markdown'

@Page({
  templateUrl: 'build/pages/speakers/speakers.html',
  pipes: [OrderByPipe, FilterArrayPipe]
})

export class SpeakersPage {
  speakers;
  searchQuery: String = '';
  constructor(
    public params: NavParams,
    public nav: NavController,
    public dataService: Data) {
    if (!this.params.data) {
      this.getSpeakers();
    } else {
      this.speakers = this.params.get('speakers')
    }
  }

  getSpeakers() {
    this.dataService.getSpeakers().subscribe(
      data => this.speakers = data
      )
  }

  speakerDeatail(speaker) {
    this.nav.push(SpeakerDetailPage, {
      'speaker': speaker
    })
  }
}
