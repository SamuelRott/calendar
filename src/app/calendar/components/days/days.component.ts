import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})
export class DaysComponent {
  @Input()
  currentDay: string;

  @Input()
  currentMonth: string;

  @Input()
  rows: SelectedDay[][];

  @Input()
  weekDayShort: string[];

  @Output()
  setDay = new EventEmitter<SelectedDay>();
}
