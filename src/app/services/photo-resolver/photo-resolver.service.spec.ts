import { TestBed } from '@angular/core/testing';

import { PhotoResolverService } from './photo-resolver.service';

describe('PhotoResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoResolverService = TestBed.get(PhotoResolverService);
    expect(service).toBeTruthy();
  });
});
