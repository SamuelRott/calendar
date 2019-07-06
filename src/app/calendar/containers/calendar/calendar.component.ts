import { Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import { setMomentDate } from './calendar.enum';
import { DaysService } from '../../services/days.service';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  readonly weekDayShort: string[] = moment.weekdaysShort();
  readonly  allMonths: string[] = moment.monthsShort();

  events: StoredEvents;

  dateObj: moment.Moment;

  currentDay: string;
  currentDayName: string;
  currentMonth: string;
  currentYear: string;
  currentDate: string;

  rows: SelectedDay[][] = [];

  constructor(private eventsService: EventsService) {
    this.dateObj = moment();
  }

  ngOnInit() {
    this.setCalendar();
    this.loadEvents();
  }

  async loadEvents() {
    await this.eventsService.getEvents().toPromise().then((events) => {
      this.events = events;
      this.setCalendar();
    });
  }

  addEvent(updatedEvent) {
    const mockEvent = {
      id: Date.now(),
      date: this.currentDate,
      text: 'miaw'
    };

    this.eventsService.addEvent(mockEvent).subscribe( () => {
      this.loadEvents();
    });
  }

  deleteEvent(updatedEvent) {
    this.eventsService.deleteEvent(updatedEvent).subscribe(async () => {
      this.loadEvents();
    });
  }

  setCalendar(): void {
    this.currentDay = this.dateObj.format('D');
    this.currentDayName = this.dateObj.format('dddd');
    this.currentMonth = this.dateObj.format('MMM');
    this.currentYear = this.dateObj.format('YYYY');
    this.currentDate =  this.dateObj.format('YYYY-MMM-D');
    this.setDaysInCalendar();
  }

  setDaysInCalendar(): void {
    let events = [];
    if (this.events && this.events.result && this.events.ok) {
      events = this.events.result;
    }

    const totalSlots: SelectedDay[] = DaysService.daysInCalendar(this.dateObj, this.allMonths, events);
    this.rows = [];
    let cells = [];

    totalSlots.forEach((day, i) => {
      if (i % 7 !== 0) {
        cells.push(day);
      } else {
        this.rows.push(cells);
        cells = [];
        cells.push(day);
      }

      if (i === totalSlots.length - 1) {
        this.rows.push(cells);
      }
    });
  }

  setDate(action: string, options): void {
    switch (action) {
      case setMomentDate.year: {
        this.dateObj = moment(this.dateObj).set(setMomentDate.year, options);
        break;
      }
      case setMomentDate.month: {
        this.dateObj = moment(this.dateObj).set(setMomentDate.month, options);
        break;
      }
      case setMomentDate.date: {
        this.dateObj = moment(this.dateObj)
          .set(setMomentDate.year, options.year)
          .set(setMomentDate.month, options.month)
          .set(setMomentDate.date, options.day);
        break;
      }
    }
    this.setCalendar();
  }
}
