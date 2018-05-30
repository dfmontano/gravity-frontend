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
import { SingleStoreComponent } from './single-store/single-store.component';
import { StoreService } from './services/store.service';
import { ProductService } from './services/product.service';
import { NewCategoryComponent } from './new-category/new-category.component';
import { CategoriesMenuComponent } from './categories-menu/categories-menu.component';
import { CategoryService } from './services/category.service';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { PasswordRecoverComponent } from './password-recover/password-recover.component';


@NgModule({
  declarations: [
    AppComponent,
    UserSignupComponent,
    UsersListComponent,
    NavbarComponent,
    UserLoginComponent,
    HomeComponent,
    SingleStoreComponent,
    NewCategoryComponent,
    CategoriesMenuComponent,
    UserPanelComponent,
    PasswordRecoverComponent,
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
    StoreService,
    CategoryService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
