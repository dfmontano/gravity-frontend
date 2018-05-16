import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {UserSignupComponent} from './user-signup/user-signup.component';
import {UserService} from './services/user.service';
import {UsersListComponent} from './users-list/users-list.component';
import {NavbarComponent} from './navbar/navbar.component';

import {routing, appRoutingProviders} from './app.routing';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';


@NgModule({
  declarations: [
    AppComponent,
    UserSignupComponent,
    UsersListComponent,
    NavbarComponent,
    UserLoginComponent,
    HomeComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    UserService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
