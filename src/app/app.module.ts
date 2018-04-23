import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserService } from './services/user.service';
import { UsersListComponent } from './users-list/users-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserSignupComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
