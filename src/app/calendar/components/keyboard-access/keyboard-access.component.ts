import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-keyboard-access',
  templateUrl: './keyboard-access.component.html',
  styleUrls: ['./keyboard-access.component.scss']
})
export class KeyboardAccessComponent {
  private _currentDay: string;
  private _currentMonth: string;
  private _currentYear: string;

  @Output()
  setDate = new EventEmitter<SelectedDay>();

  @Input()
  set currentDay(value: string) {
    this._currentDay = value;
    this.updateForm();
  }

  @Input()
  set currentMonth(value: string) {
    this._currentMonth = value;
    this.updateForm();
  }

  @Input()
  set currentYear(value: string) {
    this._currentYear = value;
    this.updateForm();
  }

  @Input()
  showKeyboardAccess: boolean;

  @Input()
  numberOfDayInMonth: number;

  @Input()
  allMonths: string[];

  date = new FormGroup({
    year: new FormControl(''),
    month: new FormControl(''),
    day: new FormControl(''),
  });

  changeDate() {
    this.setDate.emit(this.date.value);
  }

  private updateForm() {
    this.date.patchValue({
      year: this._currentYear,
      month: this._currentMonth,
      day: this._currentDay
    });
  }
}
