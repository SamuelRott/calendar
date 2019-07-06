import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalendarComponent} from './containers/calendar/calendar.component';
import {YearComponent} from './components/year/year.component';
import {DaysComponent} from './components/days/days.component';
import {MonthsComponent} from './components/months/months.component';
import {DayComponent} from './components/day/day.component';
import { CalendarEventComponent } from './components/calendar-event/calendar-event.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    CalendarComponent,
    MonthsComponent,
    DaysComponent,
    DayComponent,
    YearComponent,
    CalendarEventComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CalendarComponent]
})
export class CalendarModule { }
