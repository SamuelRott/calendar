import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss']
})
export class YearComponent {
  @Input()
  currentYear: string;

  @Output()
  setYear = new EventEmitter<string>();

  changeYear(action: string): void {
    this.setYear.emit(action);
  }
}
