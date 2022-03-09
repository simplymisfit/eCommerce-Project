import { TestBed } from '@angular/core/testing';

import { RosochackiShopFormService } from './rosochacki-shop-form.service';

describe('RosochackiShopFormService', () => {
  let service: RosochackiShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RosochackiShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
