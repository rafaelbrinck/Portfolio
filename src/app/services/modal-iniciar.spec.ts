import { TestBed } from '@angular/core/testing';

import { ModalIniciar } from './modal-iniciar';

describe('ModalIniciar', () => {
  let service: ModalIniciar;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalIniciar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
