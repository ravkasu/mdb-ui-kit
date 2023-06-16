import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandeactivateService implements CanDeactivate<LoginComponent>
{

  constructor() { }
  canDeactivate(component: LoginComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return component.canExit();
  }
}
