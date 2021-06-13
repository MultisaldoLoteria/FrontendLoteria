import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEdicionComponent } from './user-edicion.component';

describe('UserEdicionComponent', () => {
  let component: UserEdicionComponent;
  let fixture: ComponentFixture<UserEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEdicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
