import { TestBed } from '@angular/core/testing';

import { LayoutCommunicationService } from './layout-communication.service';

describe('LayoutCommunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LayoutCommunicationService = TestBed.get(LayoutCommunicationService);
    expect(service).toBeTruthy();
  });
});
