import { TestBed } from '@angular/core/testing';

import { IconsSegPlano } from './icons-seg-plano';

describe('IconsSegPlano', () => {
  let service: IconsSegPlano;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconsSegPlano);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
