import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-categories-menu',
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.css']
})
export class CategoriesMenuComponent implements OnInit {

  categories: Array<Category>;

  constructor(private _categoryService: CategoryService, dropdownConfig: NgbDropdownConfig) {

    dropdownConfig.placement = 'right-top';
    dropdownConfig.autoClose = true;

  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this._categoryService.getAll().subscribe(result => {
        this.categories = result;
      },
      error1 => {
        console.log(error1);
      }
    );
  }

}
