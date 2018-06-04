import { Injectable } from '@angular/core';
import { CartProduct } from '../models/cart-product.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { CartState } from '../models/cart-state.model';

@Injectable()
export class CartService {

  private products: CartProduct[];

  constructor() {
  }

  private cartSubject = new Subject<CartState>();
  CartState = this.cartSubject.asObservable();

  public addItem(product: CartProduct) {
    console.log('Working...');
    this.products.push(product);
    this.cartSubject.next(<CartState>{loaded: true, products: this.products});
  }


}
