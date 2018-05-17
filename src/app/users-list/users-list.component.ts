import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Array<User>;

  constructor(private _userService: UserService) {

  }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this._userService.getAll().subscribe(result => {
        this.users = result;
      },
      error1 => {
        console.log(error1);
      });
  }

}
