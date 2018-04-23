import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from '../models/user.model';


@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>('localhost:3000/users/index');
  }

  getById(id: number) {
    return this.http.get('localhost:300/users/show/' + id);
  }

  create(user: User) {
    return this.http.post('localhost:3000/users/create', user);
  }

  delete(id: number) {
    return this.http.delete('localhost:3000/users/' + id);
  }

}
