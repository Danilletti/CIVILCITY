import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarccComponent } from './navbarcc.component';

describe('NavbarccComponent', () => {
  let component: NavbarccComponent;
  let fixture: ComponentFixture<NavbarccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarccComponent]
    });
    fixture = TestBed.createComponent(NavbarccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
