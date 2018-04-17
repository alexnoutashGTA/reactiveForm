import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UsersService } from './users.service';
import {User} from './user.model';


describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [UsersService]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  it('should return a promise', inject([UsersService], (service: UsersService) => {
    service.getUsers().subscribe(result => expect(result.length).toBeGreaterThan(0));
  }));

  it('Get users return a user', inject([UsersService], (service: UsersService) => {
    service.getUsers().subscribe(result => expect(result.length).toBeGreaterThan(0));
  }));

  it('Save users should return a promise', inject([UsersService], (service: UsersService) => {
    service.saveUser(new User()).subscribe(result => expect(result).toBeTruthy());
  }));
});

