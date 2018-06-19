import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Province } from '../models/province.model';
import { PROVINCES } from '../data/provinces';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
  providers: [UserService]
})
export class UserSignupComponent implements OnInit {

  public user: User;
  private auth_token: string;
  public provinces: Province[];

  public popoverTitle = '¿Acepta el registro?';
  public popoverMessage = 'Al hacer clic en aceptar usted acepta los <strong>Términos y Condiciones</strong>' +
    ' de la afiliación establecidos en este <strong><a target="_blank" href="./assets/docs/contract.pdf">Contrato</a></strong>';
  public confirmClicked = false;
  public cancelClicked = false;
  public confirmText = 'Si, Acepto';
  public cancelText = 'No';

  constructor(private _userService: UserService, private router: Router) {
    this.user = new User();
    this.provinces = PROVINCES;
  }

  ngOnInit() {
  }

  onSubmit() {

    console.log(this.user);
    this.user.password = this.user.cedula.toString();
    this.user.password_confirmation = this.user.cedula.toString();

    this._userService.create(this.user).subscribe(
      result => {
        this.router.navigate(['/gracias']);
        console.log(result);
        this.auth_token = result.auth_token;
        // console.log(this.auth_token);
      },
      error1 => {
        console.log(error1);
      }
    );

  }


}
