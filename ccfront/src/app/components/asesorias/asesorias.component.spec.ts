import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriasComponent } from './asesorias.component';

describe('AsesoriasComponent', () => {
  let component: AsesoriasComponent;
  let fixture: ComponentFixture<AsesoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsesoriasComponent]
    });
    fixture = TestBed.createComponent(AsesoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
