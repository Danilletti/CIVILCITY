import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaccComponent } from './tiendacc.component';

describe('TiendaccComponent', () => {
  let component: TiendaccComponent;
  let fixture: ComponentFixture<TiendaccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiendaccComponent]
    });
    fixture = TestBed.createComponent(TiendaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
