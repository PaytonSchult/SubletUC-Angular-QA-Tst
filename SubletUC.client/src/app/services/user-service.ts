//maybe need this instead of template one? unknown

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../data/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseurl = environment.baseUrl+ '/user/';
  constructor(private http: HttpClient) {}

  getCurrentUser(userId: number): Observable<User> {

    return this.http.get<User>(this.baseurl + 'GetCurrentUser/' + userId);
  }
}