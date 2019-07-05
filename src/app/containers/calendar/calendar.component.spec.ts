import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';
import {MonthsComponent} from '../../components/months/months.component';
import {DaysComponent} from '../../components/days/days.component';
import {DayComponent} from '../../components/day/day.component';
import {YearComponent} from '../../components/year/year.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CalendarComponent,
        MonthsComponent,
        DaysComponent,
        DayComponent,
        YearComponent
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
