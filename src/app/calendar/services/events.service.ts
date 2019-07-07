import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private events: StoredEvents;

  private url = 'https://www.jsonstore.io/be6ee87ce7f2001579cfe86d69f0199f77df9fed385dbe21b77d7ca2c31391cb';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<StoredEvents> {
    return this.http.get<StoredEvents>(this.url).pipe(
      map((storedEvents) => this.events = storedEvents)
    );
  }

  deleteEvent(event: CalendarEvent): Observable<any> {
    const updatedEvents = this.events.result.filter((item) => event.id !== item.id);
    return this.http.post<any>(this.url, updatedEvents).pipe();
  }

  addEvent(event: CalendarEvent): Observable<any> {
    if (!this.events.result) {
      this.events.result = [];
    }
    this.events.result.push(event);
    return this.http.post<any>(this.url, this.events.result);
  }
}
