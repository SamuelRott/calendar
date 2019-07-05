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
  rows: string[];

  @Input()
  weekDayShort: string[];

  @Output()
  setDay = new EventEmitter<string>();

  changeDay(day: string) {
    this.setDay.emit(day);
  }
}
