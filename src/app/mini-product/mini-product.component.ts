import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product.model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-mini-product',
  templateUrl: './mini-product.component.html',
  styleUrls: ['./mini-product.component.css']
})
export class MiniProductComponent implements OnInit {

  @Input() product: Product;

  public readonly apiURL: string;

  constructor() {
    this.apiURL = environment.apiUrl;
  }

  ngOnInit() {
  }

}
