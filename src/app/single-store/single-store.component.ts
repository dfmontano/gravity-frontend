import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../services/store.service';
import { Store } from '../models/store.model';

@Component({
  selector: 'app-single-store',
  templateUrl: './single-store.component.html',
  styleUrls: ['./single-store.component.css']
})
export class SingleStoreComponent implements OnInit {

  private storeId;
  public store: Store;

  constructor(private activatedRoute: ActivatedRoute, private _storeService: StoreService) {
    this.store = new Store();
    // Shows current :id route parameter on console
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.storeId = params.id;
    });
  }

  ngOnInit() {
    this.getStore();
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

}
