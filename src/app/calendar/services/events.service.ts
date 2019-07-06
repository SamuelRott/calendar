import { Injectable } from '@angular/core';
import {CalendarModule} from '../calendar.module';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const lol = [
  {
    date: 'string',
    text: 'Meeting with mom'
  }
];

const miaw = {
  2019: {
    jan: {
      2: [
        {text: 'miaw'}
      ]
    }
  }
};

@Injectable({
  providedIn: CalendarModule
})
export class EventsService {


  constructor(private http: HttpClient) {}

  getEvents(): Observable<any> {
    return this.http.get<any>('lol');
  }

  addEvent(): Observable<any> {
    return this.http.post<any>('lol', {});
  }

  deleteEvent(): Observable<any> {
    return this.http.delete<any>('lol');
  }
}
