import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-single-store',
  templateUrl: './single-store.component.html',
  styleUrls: ['./single-store.component.css']
})
export class SingleStoreComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private _storeService: StoreService) { }

  ngOnInit() {

    // Shows current :id route parameter on console
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    });

  }

}
