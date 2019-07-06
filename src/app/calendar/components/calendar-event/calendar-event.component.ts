import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.scss']
})
export class CalendarEventComponent {
  currentEvents: CalendarEvent[];

  private _events: CalendarEvent[];
  private _currentDate: string;

  @Output()
  deleteCalendarEvent = new EventEmitter<CalendarEvent>();

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

  private setCurrentEvent(): void {
    if (this._events) {
      this.currentEvents = this._events.filter((item) => item.date === this._currentDate);
    }
  }
}
