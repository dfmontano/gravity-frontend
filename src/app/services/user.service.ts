import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/operator/map';
import {Observable} from 'rxjs/Observable';

import {User} from '../models/user.model';


@Injectable()
export class UserService {

  public apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:3000';
  }

  getAll() {
    return this.http.get<User[]>('localhost:3000/users/index');
  }

  getById(id: number) {
    return this.http.get('localhost:300/users/show/' + id);
  }

  create(user: User): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const data = JSON.stringify(user);
    return this.http.post(this.apiUrl + '/signup', data, {headers: headers});
  }

  login(user: User): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const data = JSON.stringify(user);
    return this.http.post(this.apiUrl + '/auth/login', data, {headers: headers});
  }

  logout() {
    localStorage.removeItem('auth_token');
  }

  getCurrent(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', token);
    return this.http.get(this.apiUrl + '/users/current', {headers: headers});
  }

  delete(id: number) {
    return this.http.delete('localhost:3000/users/' + id);
  }


}
