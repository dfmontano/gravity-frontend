import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isNavbarCollapsed = true;
  private auth_token: string;
  public user: User;

  constructor(private _userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {

    this.getCurrent();

  }

  getCurrent() {
    this.auth_token = localStorage.getItem('auth_token');
    if (this.auth_token) {
      this._userService.getCurrent(this.auth_token).subscribe(result => {
          console.log(result);
        },
        error1 => {
          console.log(error1);
        });
    }
  }

}
