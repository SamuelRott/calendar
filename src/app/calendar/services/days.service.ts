import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { setMomentDate } from '../containers/calendar/calendar.enum';


@Injectable({
  providedIn: 'root'
})
export class DaysService {

  static daysInMonth(numberOfDayInMonth, currentMonth, currentYear): SelectedDay[] {
    const days = [];
    for (let d = 1; d <= numberOfDayInMonth; d++) {
      days.push({day: d.toString(), month: currentMonth, year: currentYear});
    }
    return days;
  }

  static startingBlankDaysInMonth(allMonths, firstDayOfMonth, currentMonthIndex, currentYear): SelectedDay[] {
    let lastMonthIndex;
    let year;

    if (currentMonthIndex - 1 >= 0) {
      year = currentYear;
      lastMonthIndex = currentMonthIndex - 1;
    } else {
      year = Number(currentYear) - 1;
      lastMonthIndex = allMonths.length - 1;
    }
    const lastMonth = allMonths[lastMonthIndex];
    const lastMonthsDays = moment(`${year}-${lastMonth}`, 'YYYY-MMM').daysInMonth();

    const startingBlankDays = [];
    for (let d = lastMonthsDays; d > (lastMonthsDays - firstDayOfMonth); d--) {
      startingBlankDays.unshift({day: d.toString(), month: lastMonth, year: year.toString()});
    }
    return startingBlankDays;
  }

  static endingBlankDaysInMonth(allMonths, lastDayOfMonth, currentMonthIndex, currentYear): SelectedDay[] {
    let nextMonthIndex;
    let year;

    if (currentMonthIndex + 1 <= allMonths.length - 1  ) {
      year = currentYear;
      nextMonthIndex = currentMonthIndex + 1;
    } else {
      year = Number(currentYear) + 1;
      nextMonthIndex = 0;
    }
    const nextMonth = allMonths[nextMonthIndex];

    const endingBlankDays = [];
    for (let d = 1; d < lastDayOfMonth; d++) {
      endingBlankDays.push({day: d.toString(), month: nextMonth, year: year.toString()});
    }
    return  endingBlankDays;
  }

  static daysInCalendar(dateObj: moment.Moment, allMonths): SelectedDay[] {
    const currentMonth: string = dateObj.format('MMM');
    const currentMonthIndex = allMonths.indexOf(currentMonth);
    const currentYear: string = dateObj.format('YYYY');
    const numberOfDayInMonth: number = Number(dateObj.daysInMonth());
    const firstDayOfMonth: string =  moment(dateObj).startOf(setMomentDate.month).format('d');
    const lastDayOfMonth: string = moment(dateObj).endOf(setMomentDate.month).format('d');

    return [
      ...DaysService.startingBlankDaysInMonth(allMonths, firstDayOfMonth, currentMonthIndex, currentYear),
      ...DaysService.daysInMonth(numberOfDayInMonth, currentMonth, currentYear),
      ...DaysService.endingBlankDaysInMonth(allMonths, lastDayOfMonth, currentMonthIndex, currentYear)
    ];
  }


}
