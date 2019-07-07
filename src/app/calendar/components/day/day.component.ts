import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent {
  @Input()
  currentDayNbr: string;

  @Input()
  currentDayName: string;
}
