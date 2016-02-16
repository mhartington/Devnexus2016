import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class Data {
  constructor(
    public http: Http
    ) { }
  getSchedule() {
    return this.http.get('https://devnexus.com/api/presentations.json')
      .map(scheduleRes => scheduleRes.json())
      .catch(this.handleError);
  }

  getSpeakers() {
    return this.http.get('https://devnexus.com/api/speakers.json')
      .map(speakersRes => speakersRes.json())
      .catch(this.handleError);
  }
  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
};
