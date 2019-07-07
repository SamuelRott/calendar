import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';
import {MonthsComponent} from '../../components/months/months.component';
import {DaysComponent} from '../../components/days/days.component';
import {DayComponent} from '../../components/day/day.component';
import {YearComponent} from '../../components/year/year.component';
import {CalendarEventComponent} from '../../components/calendar-event/calendar-event.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AddEventComponent} from '../../components/add-event/add-event.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {KeyboardAccessComponent} from '../../components/keyboard-access/keyboard-access.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        CalendarComponent,
        MonthsComponent,
        DaysComponent,
        DayComponent,
        YearComponent,
        CalendarEventComponent,
        AddEventComponent,
        KeyboardAccessComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
