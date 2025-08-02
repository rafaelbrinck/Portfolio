import { TestBed } from '@angular/core/testing';

import { ModalContato } from './modal-contato';

describe('ModalContato', () => {
  let service: ModalContato;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalContato);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
