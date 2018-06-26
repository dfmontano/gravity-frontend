import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { StarRatingModule } from 'angular-star-rating';
import { NgxGalleryModule } from 'ngx-gallery';

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
import { SingleProductComponent } from './single-product/single-product.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { SignupConfirmationComponent } from './signup-confirmation/signup-confirmation.component';
import { MiniProductComponent } from './mini-product/mini-product.component';
import { MiniStoreComponent } from './mini-store/mini-store.component';
import { CategoryResultsComponent } from './category-results/category-results.component';


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
    SingleProductComponent,
    CartItemsComponent,
    SignupConfirmationComponent,
    MiniProductComponent,
    MiniStoreComponent,
    CategoryResultsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    StarRatingModule.forRoot(),
    NgxGalleryModule,
    routing,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'warning' // set defaults here
    })
  ],
  providers: [
    UserService,
    StoreService,
    CategoryService,
    ProductService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
