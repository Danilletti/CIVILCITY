import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterccComponent } from './footercc.component';

describe('FooterccComponent', () => {
  let component: FooterccComponent;
  let fixture: ComponentFixture<FooterccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterccComponent]
    });
    fixture = TestBed.createComponent(FooterccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
