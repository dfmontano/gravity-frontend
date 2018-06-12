import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  public product: Product;
  private productId;

  constructor(private _productService: ProductService, private activatedRoute: ActivatedRoute) {
    this.product = new Product();
    this.activatedRoute.params.subscribe(params => {
      this.productId = params.id;
      });
  }

  // TODO Add route and get params routes

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this._productService.getById(this.productId).subscribe(result => {
      this.product = result;
    }, error1 => {
      console.log(error1);
    });
  }

}
