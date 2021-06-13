import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolEliminarComponent } from './rol-eliminar.component';

describe('RolEliminarComponent', () => {
  let component: RolEliminarComponent;
  let fixture: ComponentFixture<RolEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
