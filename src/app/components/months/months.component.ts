import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.scss']
})
export class MonthsComponent {
  @Input()
  allMonths: string[];

  @Input()
  currentMonth: string;

  @Output()
  setMonth = new EventEmitter<string>();

  changeMonth(action: string): void {
    this.setMonth.emit(action);
  }
}
