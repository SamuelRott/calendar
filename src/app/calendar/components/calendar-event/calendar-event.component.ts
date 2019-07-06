import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.scss']
})
export class CalendarEventComponent implements OnInit {
  @Input()
  events: CalendarEvent[] = [];

  @Input()
  currentDate: string;

  constructor() { }

  ngOnInit() {
  }

  currentEvents(): CalendarEvent[] {
    return this.events
      ? this.events.filter((item) => item.date === this.currentDate)
      : [];
  }
}
