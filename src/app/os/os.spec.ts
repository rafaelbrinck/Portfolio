import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OS } from './os';

describe('OS', () => {
  let component: OS;
  let fixture: ComponentFixture<OS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
