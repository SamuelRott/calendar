import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CalendarComponent} from './containers/calendar/calendar.component';
import {YearComponent} from './components/year/year.component';
import {DaysComponent} from './components/days/days.component';
import {MonthsComponent} from './components/months/months.component';
import {DayComponent} from './components/day/day.component';
import { CalendarEventComponent } from './components/calendar-event/calendar-event.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { KeyboardAccessComponent } from './components/keyboard-access/keyboard-access.component';



@NgModule({
  declarations: [
    CalendarComponent,
    MonthsComponent,
    DaysComponent,
    DayComponent,
    YearComponent,
    CalendarEventComponent,
    AddEventComponent,
    KeyboardAccessComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [CalendarComponent]
})
export class CalendarModule { }
