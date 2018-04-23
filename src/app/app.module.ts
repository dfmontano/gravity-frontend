import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserSignupComponent } from './user-signup/user-signup.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserSignupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
