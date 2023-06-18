import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CanactivateService } from './guards/canactivate.service';
import { CanactivateloginService } from './guards/canactivatelogin.service';

const routes: Routes = [
  {path:'',component:LoginComponent,canActivate:[CanactivateloginService]},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[CanactivateService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
