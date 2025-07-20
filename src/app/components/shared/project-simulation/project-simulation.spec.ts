import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSimulation } from './project-simulation';

describe('ProjectSimulation', () => {
  let component: ProjectSimulation;
  let fixture: ComponentFixture<ProjectSimulation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectSimulation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSimulation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
