import { TestBed } from '@angular/core/testing';

import { ToasterChildService } from './toaster-child.service';

describe('ToasterChildService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToasterChildService = TestBed.get(ToasterChildService);
    expect(service).toBeTruthy();
  });
});
