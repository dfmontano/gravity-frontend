import { Component, OnInit, Input } from '@angular/core';
import { Store } from '../models/store.model';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-mini-store',
  templateUrl: './mini-store.component.html',
  styleUrls: ['./mini-store.component.css']
})
export class MiniStoreComponent implements OnInit {

  @Input() store: Store;
  private readonly apiURL: string;

  constructor() {
    this.apiURL = environment.apiUrl;
  }

  ngOnInit() {
    this.store.logo.url = this.apiURL + this.store.logo.url;
  }

}
