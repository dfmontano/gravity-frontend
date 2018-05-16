import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  public apiUrl: string;

  private constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:3000';
  }

  getAll() {


  }

  getByStore(storeId: string) {

  }

}
