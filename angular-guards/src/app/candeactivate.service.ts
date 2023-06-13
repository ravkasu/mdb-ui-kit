import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterState, RouterStateSnapshot } from "@angular/router";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { ProductComponent } from "./product/product.component";
@Injectable()
export class CanDeactivateService implements CanDeactivate<ContactUsComponent>{
    canDeactivate(component:ContactUsComponent,currentRoute:ActivatedRouteSnapshot,currentState:RouterStateSnapshot
        ,nextState:RouterStateSnapshot){
            return component.canExit();
        }
}