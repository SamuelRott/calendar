import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent {
  @Output()
  addCalendarEvent = new EventEmitter<string>();

  eventText = new FormControl('', [Validators.required]);

  postEvent(): void {
    this.addCalendarEvent.emit(this.eventText.value);
    this.eventText.reset();
  }
}
