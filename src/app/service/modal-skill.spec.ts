import { TestBed } from '@angular/core/testing';

import { ModalSkill } from './modal-skill';

describe('ModalSkill', () => {
  let service: ModalSkill;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalSkill);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
