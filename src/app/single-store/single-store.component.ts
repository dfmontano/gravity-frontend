import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { StoreService } from '../services/store.service';
import { ProductService } from '../services/product.service';
import { Store } from '../models/store.model';
import { Product } from '../models/product.model';
import { environment } from '../../environments/environment';

declare var google: any;

@Component({
  selector: 'app-single-store',
  templateUrl: './single-store.component.html',
  styleUrls: ['./single-store.component.css']
})
export class SingleStoreComponent implements OnInit {

  public readonly apiURL: string;
  private storeId;
  public store: Store;
  public storeProducts: Product[];
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private activatedRoute: ActivatedRoute, private _storeService: StoreService, private _productService: ProductService) {
    this.apiURL = environment.apiUrl;
    this.store = new Store();
    // Shows current :id route parameter on console
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.storeId = params.id;
    });
  }

  ngOnInit() {
    this.getStore();
    this.getProducts();

    this.galleryOptions = [
      {
        image: true,
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
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        width: '100%'
      }
    ];

    this.galleryImages = [
      {
        small: this.store.cover.url,
        medium: this.store.cover.url,
        big: this.store.cover.url
      },
      {
        small: this.store.cover.url,
        medium: this.store.cover.url,
        big: this.store.cover.url
      },
      {
        small: this.store.cover.url,
        medium: this.store.cover.url,
        big: this.store.cover.url
      },
      {
        small: this.store.cover.url,
        medium: this.store.cover.url,
        big: this.store.cover.url
      },

    ];

  }

  onMapReady(map) {
    console.log('map', map);
  }

  getStore() {
    this._storeService.getById(this.storeId).subscribe(result => {
        this.store = result;
        console.log(this.store);
      },
      error1 => {
        console.log(error1);
      });
  }

  getProducts() {
    this._productService.getByStore(this.storeId).subscribe( result => {
      console.log(result);
      this.storeProducts = result;
    }, error => {
      console.log(error);
    });
  }

}
