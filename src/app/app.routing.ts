import {ModuleWithProviders, Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserSignupComponent} from './user-signup/user-signup.component';
import {AppComponent} from './app.component';
import {UserLoginComponent} from './user-login/user-login.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'registrarse', component: UserSignupComponent},
  {path: 'login', component: UserLoginComponent},
  {path: '**', component: AppComponent}
];

export const appRoutingProviders: any [] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
