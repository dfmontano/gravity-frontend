import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class ProductService {

  public apiUrl: string;

  private constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  getAll() {


  }

  getByStore(storeId: string) {

  }

}
