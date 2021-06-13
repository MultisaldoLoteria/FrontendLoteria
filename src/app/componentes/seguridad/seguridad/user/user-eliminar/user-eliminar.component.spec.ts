import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEliminarComponent } from './user-eliminar.component';

describe('UserEliminarComponent', () => {
  let component: UserEliminarComponent;
  let fixture: ComponentFixture<UserEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEliminarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
