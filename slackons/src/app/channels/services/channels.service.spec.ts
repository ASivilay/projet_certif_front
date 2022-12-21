import { TestBed } from '@angular/core/testing';

import { ChannelService } from './channels.services.service';

describe('ServicesService', () => {
  let service: ChannelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChannelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
