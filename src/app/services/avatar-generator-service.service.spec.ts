import { TestBed } from '@angular/core/testing';

import { AvatarGeneratorServiceService } from './avatar-generator-service.service';

describe('AvatarGeneratorServiceService', () => {
  let service: AvatarGeneratorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvatarGeneratorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
