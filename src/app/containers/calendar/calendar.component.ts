import { Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import { SelectedDay } from '../../typings';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  weekDayShort: string[];
  dateObj: moment.Moment;
  allMonths: string[];
  currentDay: string;
  currentDayName: string;
  currentMonth: string;
  currentYear: string;

  startingBlankDays: SelectedDay[] = [];
  endingBlankDays: SelectedDay[] = [];
  days: SelectedDay[] = [];
  totalSlots: SelectedDay[] = [];
  rows: any[] = [];

  constructor() {
    this.dateObj = moment();
    this.weekDayShort = moment.weekdaysShort();
    this.allMonths = moment.monthsShort();
  }

  ngOnInit() {
    this.setCalendar();
  }

  setCalendar(): void {
    this.currentMonth = this.dateObj.format('MMM');
    this.currentDay = this.dateObj.format('D');
    this.currentDayName = this.dateObj.format('dddd');
    this.currentYear = this.dateObj.format('YYYY');
    this.daysInMonth();
    this.startingBlankDaysInMonth();
    this.endingBlankDaysInMonth();
    this.totalSlots = [...this.startingBlankDays, ...this.days, ...this.endingBlankDays];
    this.setSlots();
  }

  daysInMonth(): void {
    this.days = [];
    for (let d = 1; d <= Number(this.dateObj.daysInMonth()); d++) {
      this.days.push({day: d.toString(), month: this.currentMonth, year: this.currentYear});
    }
  }

  startingBlankDaysInMonth(): void {
    this.startingBlankDays = [];
    const currentMonthIndex = this.allMonths.indexOf(this.currentMonth);
    let lastMonth;
    let year;

    if (currentMonthIndex - 1 >= 0) {
      year = this.currentYear;
      lastMonth = this.allMonths[currentMonthIndex - 1];
    } else {
      year = Number(this.currentYear) - 1;
      lastMonth = this.allMonths[this.allMonths.length - 1];
    }

    for (let d = 1; d <= Number(this.firstDayOfMonth()); d++) {
      this.startingBlankDays.push({day: d.toString(), month: lastMonth, year: year.toString()});
    }
  }

  endingBlankDaysInMonth(): void {
    this.endingBlankDays = [];
    const currentMonthIndex = this.allMonths.indexOf(this.currentMonth);
    let nextMonth;
    let year;

    if (currentMonthIndex + 1 <= this.allMonths.length - 1  ) {
      year = this.currentYear;
      nextMonth = this.allMonths[currentMonthIndex + 1];
    } else {
      year = Number(this.currentYear) + 1;
      nextMonth = this.allMonths[0];
    }

    for (let d = 1; d <= Number(this.lastDayOfMonth()); d++) {
      this.endingBlankDays.push({day: d.toString(), month: nextMonth, year: year.toString()});
    }
  }

  firstDayOfMonth(): string {
    return  moment(this.dateObj)
      .startOf('month')
      .format('d');
  }

  lastDayOfMonth(): string {
    return  moment(this.dateObj)
      .endOf('month')
      .format('d');
  }

  setSlots(): void {
    this.rows = [];
    let cells = [];

    this.totalSlots.forEach((day, i) => {
      if (i % 7 !== 0) {
        cells.push(day);
      } else {
        this.rows.push(cells);
        cells = [];
        cells.push(day);
      }

      if (i === this.totalSlots.length - 1) {
        this.rows.push(cells);
      }
    });
  }

  setDate(what: string, options): void {
    switch (what) {
      case 'SET_YEAR': {
        this.dateObj = moment(this.dateObj).set('year', options);
        break;
      }
      case 'SET_MONTH': {
        this.dateObj = moment(this.dateObj).set('month', options);
        break;
      }
      case 'SET_DAY': {
        this.dateObj = moment(this.dateObj).set('year', options.year).set('month', options.month).set('date', options.day);
        break;
      }
    }
    this.setCalendar();
  }
}
