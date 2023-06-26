import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForoccComponent } from './forocc.component';

describe('ForoccComponent', () => {
  let component: ForoccComponent;
  let fixture: ComponentFixture<ForoccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForoccComponent]
    });
    fixture = TestBed.createComponent(ForoccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
