import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupccComponent } from './signupcc.component';

describe('SignupccComponent', () => {
  let component: SignupccComponent;
  let fixture: ComponentFixture<SignupccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupccComponent]
    });
    fixture = TestBed.createComponent(SignupccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
