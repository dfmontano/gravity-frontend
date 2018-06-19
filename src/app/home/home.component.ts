import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { HOME_IMAGES } from '../data/home-images';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public images: string[];
  public featuredProducts: Product[];

  constructor(carouselConfig: NgbCarouselConfig, private _productService: ProductService) {
    this.images = HOME_IMAGES;
    carouselConfig.interval = 3000;
  }

  ngOnInit() {
    this.getFeaturedProducts();
  }

  private getFeaturedProducts() {
    this._productService.getFeatured().subscribe(result => {
      this.featuredProducts = result;
    }, error => {
      console.log(error);
    });
  }

}
