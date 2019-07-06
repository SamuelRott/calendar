import { Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import { setMomentDate } from './calendar.enum';
import { DaysService } from '../../services/days.service';
import {EventsService} from '../../services/events.service';

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

  rows: SelectedDay[][] = [];

  constructor(private eventsService: EventsService) {
    this.dateObj = moment();
  }

  ngOnInit() {
    this.setCalendar();
    this.loadEvents().then(() => console.warn(this));
  }

  async loadEvents() {
    this.events = await this.eventsService.getEvents().toPromise();
  }

  addEvent(updatedEvent) {
    // const mockEvent = {
    //   id: Date.now(),
    //   date: {this.dateObj.format('YYYY-MMM-D')},
    //   text: 'miaw'
    // };

    this.eventsService.addEvent(updatedEvent).subscribe(async () => {
      this.events = await this.eventsService.getEvents().toPromise();
    });
  }

  deleteEvent(updatedEvent) {
    this.eventsService.deleteEvent(updatedEvent).subscribe(async () => {
      console.warn('deleteEvent')
      this.events = await this.eventsService.getEvents().toPromise();
    });
  }

  setCalendar(): void {
    // TODO refactor is only need by day component, we can passs an object and extract info from there
    this.currentDay = this.dateObj.format('D');
    this.currentDayName = this.dateObj.format('dddd');
    this.currentMonth = this.dateObj.format('MMM');
    this.currentYear = this.dateObj.format('YYYY');
    // end
    this.setDaysInCalendar();
  }

  setDaysInCalendar(): void {
    const totalSlots: SelectedDay[] = DaysService.daysInCalendar(this.dateObj, this.allMonths);
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
