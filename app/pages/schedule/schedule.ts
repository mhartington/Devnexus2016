import {Page, NavController} from 'ionic-framework/ionic';
import {Data} from '../../providers/data/data'
import {SessionDetailPage} from '../session-detail/session-detail'
import {FilterArrayPipe} from '../../pipes/markdown'

@Page({
  templateUrl: 'build/pages/schedule/schedule.html',
  pipes: [FilterArrayPipe]
})

export class SchedulePage {
  schedule;
  searchQuery: String = '';
  constructor(
    public nav: NavController,
    public dataService: Data
    ) {
    this.getAllTalks();
  }

  getAllTalks() {
    this.dataService.getSchedule().subscribe(
      data => this.schedule = data.presentations
      )
  }

  getTalk(talk) {
    this.nav.push(SessionDetailPage, {
      'session': talk
    })
  }
}
