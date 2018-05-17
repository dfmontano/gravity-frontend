import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Store } from '../models/store.model';

@Injectable()
export class StoreService {

  public apiUrl: string;
  public store: Store;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:3000';
    this.store = new Store();
  }

  getById(id: number): Observable<any> {
    const request_url = this.apiUrl + 'stores/' + id;
    return this.http.get(request_url);
  }

}
