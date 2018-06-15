import {ModuleWithProviders, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserSignupComponent} from './user-signup/user-signup.component';
import {AppComponent} from './app.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {HomeComponent} from './home/home.component';
import {UsersListComponent} from './users-list/users-list.component';
import {SingleStoreComponent} from './single-store/single-store.component';
import {PasswordRecoverComponent} from './password-recover/password-recover.component';
import {SingleProductComponent} from './single-product/single-product.component';
import {SignupConfirmationComponent} from './signup-confirmation/signup-confirmation.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'registrarse', component: UserSignupComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'gracias', component: SignupConfirmationComponent},
  {path: 'usuarios/lista', component: UsersListComponent},
  {path: 'tiendas/:id', component: SingleStoreComponent},
  {path: 'productos/:id', component: SingleProductComponent},
  {path: 'usuarios/recuperar_contrasena' , component: PasswordRecoverComponent},
  {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any [] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
