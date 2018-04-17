import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user.model';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://jsonplaceholder.typicode.com/users/');
  }

  saveUser(user: User) {
    return this.httpClient.put<User>('http://jsonplaceholder.typicode.com/', user);
  }
}
