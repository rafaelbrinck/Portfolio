import { TestBed } from '@angular/core/testing';

import { ModalSobre } from './modal-sobre';

describe('ModalSobre', () => {
  let service: ModalSobre;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalSobre);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
