import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './containers/calendar/calendar.component';
import { MonthsComponent } from './components/months/months.component';
import { DaysComponent } from './components/days/days.component';
import { DayComponent } from './components/day/day.component';
import { YearComponent } from './components/year/year.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MonthsComponent,
    DaysComponent,
    DayComponent,
    YearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
