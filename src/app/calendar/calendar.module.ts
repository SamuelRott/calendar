import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalendarComponent} from './containers/calendar/calendar.component';
import {YearComponent} from './components/year/year.component';
import {DaysComponent} from './components/days/days.component';
import {MonthsComponent} from './components/months/months.component';
import {DayComponent} from './components/day/day.component';



@NgModule({
  declarations: [
    CalendarComponent,
    MonthsComponent,
    DaysComponent,
    DayComponent,
    YearComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CalendarComponent]
})
export class CalendarModule { }
