import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolAdicionComponent } from './rol-adicion.component';

describe('RolAdicionComponent', () => {
  let component: RolAdicionComponent;
  let fixture: ComponentFixture<RolAdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolAdicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolAdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
