import { TestBed } from '@angular/core/testing';

import { ModalProject } from './modal-project';

describe('ModalProject', () => {
  let service: ModalProject;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalProject);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
