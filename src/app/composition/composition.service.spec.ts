/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CompositionService } from './composition.service';

describe('Service: Composition', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompositionService]
    });
  });

  it('should ...', inject([CompositionService], (service: CompositionService) => {
    expect(service).toBeTruthy();
  }));
});
