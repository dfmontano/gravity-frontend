import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Category } from '../models/category.model';
import { Subcategory } from '../models/subcategory.model';
import 'rxjs/operator/map';

@Injectable()
export class CategoryService {

  public apiUrl: string;


  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:3000';
  }

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl + '/categories/index' );
  }

}
