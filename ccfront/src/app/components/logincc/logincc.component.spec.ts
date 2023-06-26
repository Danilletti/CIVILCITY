import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginccComponent } from './logincc.component';

describe('LoginccComponent', () => {
  let component: LoginccComponent;
  let fixture: ComponentFixture<LoginccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginccComponent]
    });
    fixture = TestBed.createComponent(LoginccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
