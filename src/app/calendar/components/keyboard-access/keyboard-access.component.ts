import {AfterViewInit, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-keyboard-access',
  templateUrl: './keyboard-access.component.html',
  styleUrls: ['./keyboard-access.component.scss']
})
export class KeyboardAccessComponent implements AfterViewInit {
  @Output()
  setDate = new EventEmitter<SelectedDay>();

  @Input()
  currentDay: string;

  @Input()
  currentYear: string;

  @Input()
  currentMonth: string;

  @Input()
  numberOfDayInMonth: number;

  @Input()
  allMonths: string[];

  date = new FormGroup({
    year: new FormControl(''),
    month: new FormControl(''),
    day: new FormControl(''),
  });

  ngAfterViewInit() {
    this.date.setValue({
      year: this.currentYear,
      month: this.currentMonth,
      day: this.currentDay
    });
  }

  changeDate() {
    this.setDate.emit(this.date.value);
  }
}
