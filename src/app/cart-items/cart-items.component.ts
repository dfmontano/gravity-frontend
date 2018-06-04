import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartProduct } from '../models/cart-product.model';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {
  @Input() cartProduct: CartProduct;

  constructor(private _cartService: CartService) { }

  ngOnInit() {
  }

  public addProduct(product: CartProduct) {
    this._cartService.addItem(product);
  }

}
