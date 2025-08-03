import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaUser } from './tela-user';

describe('TelaUser', () => {
  let component: TelaUser;
  let fixture: ComponentFixture<TelaUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
