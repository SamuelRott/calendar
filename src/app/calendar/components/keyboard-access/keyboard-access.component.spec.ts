import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardAccessComponent } from './keyboard-access.component';

describe('KeyboardAccessComponent', () => {
  let component: KeyboardAccessComponent;
  let fixture: ComponentFixture<KeyboardAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
