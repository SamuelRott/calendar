import { Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import { setMomentDate } from './calendar.enum';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  readonly weekDayShort: string[] = moment.weekdaysShort();
  readonly  allMonths: string[] = moment.monthsShort();

  dateObj: moment.Moment;

  currentDay: string;
  currentDayName: string;
  currentMonth: string;
  currentYear: string;

  startingBlankDays: SelectedDay[] = [];
  endingBlankDays: SelectedDay[] = [];
  days: SelectedDay[] = [];
  totalSlots: SelectedDay[] = [];
  rows: SelectedDay[][] = [];


  constructor() {
    this.dateObj = moment();
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

    const lastMonthsDays = moment(`${year}-${lastMonth}`, 'YYYY-MMM').daysInMonth();
    const firstDays = Number(this.firstDayOfMonth());

    for (let d = lastMonthsDays; d >= (lastMonthsDays - firstDays); d--) {
      this.startingBlankDays.unshift({day: d.toString(), month: lastMonth, year: year.toString()});
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

  daysInMonth(): void {
    this.days = [];
    for (let d = 1; d <= Number(this.dateObj.daysInMonth()); d++) {
      this.days.push({day: d.toString(), month: this.currentMonth, year: this.currentYear});
    }
  }

  firstDayOfMonth(): string {
    return  moment(this.dateObj)
      .startOf(setMomentDate.month)
      .format('d');
  }

  lastDayOfMonth(): string {
    return  moment(this.dateObj)
      .endOf(setMomentDate.month)
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
