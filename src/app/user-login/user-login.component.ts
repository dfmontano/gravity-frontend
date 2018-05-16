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
  private auth_token: string;

  constructor(private _userService: UserService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  login() {
    this._userService.login(this.user).subscribe(result => {
        this.auth_token = result.auth_token;

        // Stores the auth token in localStorage
        localStorage.setItem('auth_token', this.auth_token);
        console.log(this.auth_token);
        this.router.navigate(['/']);
      },
      error1 => {
        console.log(error1);
      });
  }

}
