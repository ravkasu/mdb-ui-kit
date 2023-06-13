import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";


@Injectable()
export class CanActivateService implements CanActivate{
    constructor(private authService:AuthService,private router:Router){

    }
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean{
        if(this.authService.isAuthenticated()){
        return true;
        }
        else{
            window.alert("please login");
            this.router.navigate(['']);
            return false;

        }
        
    }
    

}