import { TestBed, inject } from '@angular/core/testing';

import { LibraryApiPhotosService } from './library-api-photos.service';

describe('LibraryApiPhotosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryApiPhotosService]
    });
  });

  it('should be created', inject([LibraryApiPhotosService], (service: LibraryApiPhotosService) => {
    expect(service).toBeTruthy();
  }));
});
