import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicinitComponent } from './basicinit.component';

describe('BasicinitComponent', () => {
  let component: BasicinitComponent;
  let fixture: ComponentFixture<BasicinitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicinitComponent]
    });
    fixture = TestBed.createComponent(BasicinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
