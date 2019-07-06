import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.scss']
})
export class CalendarEventComponent {
  private _events: CalendarEvent[];
  private _currentDate: string;

  @Input()
  set events(value: CalendarEvent[]) {
    this._events = value;
    this.setCurrentEvent();
  }

  @Input()
  set currentDate(value: string)  {
    this._currentDate = value;
    this.setCurrentEvent();
  }

  @Output()
  deleteCalendarEvent = new EventEmitter<CalendarEvent>();

  currentEvents: CalendarEvent[];

  setCurrentEvent(): void {
    if (this._events) {
      this.currentEvents = this._events.filter((item) => item.date === this._currentDate);
    }
  }

}
