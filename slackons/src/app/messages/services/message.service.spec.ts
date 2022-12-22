import { TestBed } from '@angular/core/testing';

import { MessageServiceService } from './message.service';

describe('MessageServiceService', () => {
  let service: MessageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
