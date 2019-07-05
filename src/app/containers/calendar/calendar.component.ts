import { Component, OnInit} from '@angular/core';
import * as moment from 'moment';

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

  blankDays: any[] = [];
  days: any[] = [];
  totalSlots: any[] = [];
  rows: any[] = [];
  cells: any[] = [];

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
    this.blankDays = new Array(Number(this.firstDayOfMonth()));
    this.totalSlots = [...this.blankDays, ...this.days];
    this.setSlots();
  }

  daysInMonth(): void {
    this.days = [];
    for (let d = 1; d <= Number(this.dateObj.daysInMonth()); d++) {
      this.days.push(d);
    }
  }

  firstDayOfMonth(): string {
    return  moment(this.dateObj)
      .startOf('month')
      .format('d');
  }

  setSlots(): void {
    this.rows = [];
    this.cells = [];

    this.totalSlots.forEach((day, i) => {
      const dayStr = day ? day.toString() : '';

      if (i % 7 !== 0) {
        this.cells.push(dayStr);
      } else {
        this.rows.push(this.cells);
        this.cells = [];
        this.cells.push(dayStr);
      }
      if (i === this.totalSlots.length - 1) { // when end loop we add remain date
        this.rows.push(this.cells);
      }
    });
  }

  setMonth(month: string): void {
    const selectedMonth = this.allMonths.indexOf(month);
    let dateObject = Object.assign({}, this.dateObj);
    dateObject = moment(dateObject).set('month', selectedMonth);
    this.dateObj = dateObject;
    this.setCalendar();
  }

  setYear(year: number): void {
    let dateObject = Object.assign({}, this.dateObj);
    dateObject = moment(dateObject).set('year', year);
    this.dateObj = dateObject;
    this.setCalendar();
  }

  setDay(day: number): void {
    let dateObject = Object.assign({}, this.dateObj);
    dateObject = moment(dateObject).set('date', day);
    this.dateObj = dateObject;
    this.setCalendar();
  }
}
