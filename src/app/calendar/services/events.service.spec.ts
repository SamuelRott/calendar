import { TestBed } from '@angular/core/testing';

import { EventsService } from './events.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CalendarModule} from '../calendar.module';

describe('EventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, CalendarModule],
  }));

  it('should be created', () => {
    const service: EventsService = TestBed.get(EventsService);
    expect(service).toBeTruthy();
  });
});
