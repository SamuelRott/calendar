import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent {
  eventText: string;

  @ViewChild('eventTitleInput', { static: false })
  eventTitleInput: NgModel;

  @Output()
  addCalendarEvent = new EventEmitter<string>();

  postEvent(): void {
    this.addCalendarEvent.emit(this.eventText);
    this.eventTitleInput.reset();
  }
}
