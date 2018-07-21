import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class ProductService {

  public apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getApproved(): Observable<any> {
    return this.http.get(this.apiUrl + '/products/index/approved/true');
  }

  getFeatured(): Observable<any> {
    return this.http.get(this.apiUrl + '/products/index/featured');
  }

  getByStore(store_id: number): Observable<any> {
    return this.http.get(this.apiUrl + /stores/ + store_id + '/products');
  }

  getById(id: number): Observable<any> {
    return this.http.get(this.apiUrl + '/products/' + id);
  }

}
