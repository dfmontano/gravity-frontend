import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
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
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private _productService: ProductService, private activatedRoute: ActivatedRoute) {
    this.product = new Product();
    this.activatedRoute.params.subscribe(params => {
      this.productId = params.id;
      });

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 70,
        thumbnailsPercent: 15,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/test-product/tech.jpeg',
        medium: 'assets/images/test-product/tech.jpeg',
        big: 'assets/images/test-product/tech.jpeg'
      },
      {
        small: 'assets/images/test-product/tech-2.jpeg',
        medium: 'assets/images/test-product/tech-2.jpeg',
        big: 'assets/images/test-product/tech-2.jpeg'
      },
      {
        small: 'assets/images/test-product/tech-3.jpeg',
        medium: 'assets/images/test-product/tech-3.jpeg',
        big: 'assets/images/test-product/tech-3.jpeg'
      },
      {
        small: 'assets/images/test-product/tech-4.jpeg',
        medium: 'assets/images/test-product/tech-3.jpeg',
        big: 'assets/images/test-product/tech-3.jpeg'
      },
    ];

  }

  // TODO Add route and get params routes

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this._productService.getById(this.productId).subscribe(result => {
      this.product = result;
      console.log(result);
    }, error1 => {
      console.log(error1);
    });
  }

}
