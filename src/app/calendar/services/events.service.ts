import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private events: CalendarEvent[];

  private url = 'https://www.jsonstore.io/08c85d6884b1b37b2b01f2505a0b8a2e759bacd02991f78b580443dc145d8396';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<CalendarEvent[]> {
    return this.http.get<StoredEvents>(this.url).pipe(
      map((storedEvents) => {
        return this.events = storedEvents.result ? storedEvents.result : [];
      })
    );
  }

  deleteEvent(event: CalendarEvent): Observable<any> {
    const updatedEvents = this.events.filter((item) => event.id !== item.id);
    return this.http.post<any>(this.url, updatedEvents).pipe();
  }

  addEvent(event: CalendarEvent): Observable<any> {
    this.events.push(event);
    return this.http.post<any>(this.url, this.events);
  }
}
