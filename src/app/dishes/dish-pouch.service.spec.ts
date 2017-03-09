import { TestBed, inject } from '@angular/core/testing';

import { DishPouchService } from './dish-pouch.service';

describe('DishPouchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishPouchService]
    });
  });

  it('should ...', inject([DishPouchService], (service: DishPouchService) => {
    expect(service).toBeTruthy();
  }));
});
