import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaTrabalho } from './area-trabalho';

describe('AreaTrabalho', () => {
  let component: AreaTrabalho;
  let fixture: ComponentFixture<AreaTrabalho>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaTrabalho]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaTrabalho);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
