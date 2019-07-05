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
  setYear = new EventEmitter<number>();

  changeYear(action: string): void {

    let selectedYear;
    if (action === 'PREVIOUS') {
      selectedYear =  Number(this.currentYear) - 1;
    } else if (action === 'NEXT') {
      selectedYear =  Number(this.currentYear) + 1;
    }

    this.setYear.emit(selectedYear);
  }
}
