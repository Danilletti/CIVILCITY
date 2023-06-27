import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForowelcomeComponent } from './forowelcome.component';

describe('ForowelcomeComponent', () => {
  let component: ForowelcomeComponent;
  let fixture: ComponentFixture<ForowelcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForowelcomeComponent]
    });
    fixture = TestBed.createComponent(ForowelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
