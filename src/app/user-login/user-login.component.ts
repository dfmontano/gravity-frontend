import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../models/user.model';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User;

  constructor(private _userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  login() {

  }

}
