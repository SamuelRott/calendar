import { TestBed } from '@angular/core/testing';

import { DaysService } from './days.service';
import { CalendarModule } from '../calendar.module';
import * as moment from 'moment';
import {setMomentDate} from '../containers/calendar/calendar.enum';

describe('DaysService', () => {
  let service;
  let date;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CalendarModule],
    });
    service = TestBed.get(DaysService);
    date = moment();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should always create 6 week, 42 days', () => {
    expect(DaysService.daysInCalendar(date, moment.monthsShort(), []).length).toEqual(42);
    expect(DaysService.daysInCalendar(date.subtract('23', 'month'), moment.monthsShort(), []).length).toEqual(42);
    expect(DaysService.daysInCalendar(date.add('235', 'year'), moment.monthsShort(), []).length).toEqual(42);
  });

  it('should have less then 7 starting day', () =>  {
    const firstDayOfMonth: string =  moment(date).startOf(setMomentDate.month).format('d');
    const currentMonthIndex: number = moment.monthsShort().indexOf(date.format('MMM'));
    const currentYear: number = date.format('YYYY');

    expect(DaysService.startingBlankDaysInMonth(moment.monthsShort(), firstDayOfMonth, currentMonthIndex, currentYear).length)
      .toBeLessThan(7);

    // past date
    date.subtract('23', 'month');
    expect(DaysService.startingBlankDaysInMonth(moment.monthsShort(), firstDayOfMonth, currentMonthIndex, currentYear).length)
      .toBeLessThan(7);

    // future date
    date.add('25', 'year');
    expect(DaysService.startingBlankDaysInMonth(moment.monthsShort(), firstDayOfMonth, currentMonthIndex, currentYear).length)
      .toBeLessThan(7);
  });
});
