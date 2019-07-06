import { TestBed } from '@angular/core/testing';

import { DaysService } from './days.service';
import { CalendarModule } from '../calendar.module';

describe('DaysService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [CalendarModule],
  }));

  it('should be created', () => {
    const service: DaysService = TestBed.get(DaysService);
    expect(service).toBeTruthy();
  });
});
