import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
  providers: [UserService]
})
export class UserSignupComponent implements OnInit {

  public user: User;
  private auth_token: string;

  constructor(private _userService: UserService, private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
    this._userService.create(this.user).subscribe(
      result => {
        console.log(result);
        this.auth_token = result.auth_token;
        console.log(this.auth_token);
        this.router.navigate(['/']);
      },
      error1 => {
        console.log(error1);
      }
    );
  }


}
