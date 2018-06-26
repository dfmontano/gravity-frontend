import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Store } from '../models/store.model';

@Injectable()
export class StoreService {

  public apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getById(id: number): Observable<any> {
    const request_url = this.apiUrl + '/stores/' + id;
    return this.http.get(request_url);
  }

  getBySubcategory(subcategory_id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/subcategories/' + subcategory_id + '/stores');
  }

}
