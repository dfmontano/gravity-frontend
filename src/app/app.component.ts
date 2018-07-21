import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import 'hammerjs';
import {UserLoginComponent} from './user-login/user-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private modalService: NgbModal) {
    this.openModal();
  }

  openModal() {
    const modalRef = this.modalService.open(UserLoginComponent, { size: 'lg' });
  }

}
