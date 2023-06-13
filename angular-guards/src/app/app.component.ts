import { createInjectableType } from '@angular/compiler';
import { Component, Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  title = 'angular-guards';
  constructor(private authService:AuthService){

  }
  login(){
    this.authService.login();
    console.log(this.authService.isAuthenticated());

  }
  logout(){
    this.authService.logout();
    console.log(this.authService.isAuthenticated());
  }
}
