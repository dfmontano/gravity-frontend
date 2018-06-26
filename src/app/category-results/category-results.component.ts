import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '../models/store.model';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-category-results',
  templateUrl: './category-results.component.html',
  styleUrls: ['./category-results.component.css']
})
export class CategoryResultsComponent implements OnInit {

  stores: Store[];
  subcategoryId;

  constructor(private _storeService: StoreService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.subcategoryId = params.id;
      this.getResults();
    }, error1 => {
      console.log(error1);
    });
  }

  ngOnInit() {
    this.getResults();
  }

  getResults() {
    this._storeService.getBySubcategory(this.subcategoryId).subscribe(result => {
      this.stores = result;
    }, error1 => {
      console.log(error1);
    });
  }
}
