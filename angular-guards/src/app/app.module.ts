import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { CanActivateService } from './canactivate.service';
import { CanDeactivateService } from './candeactivate.service';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductComponent } from './product/product.component';


const appRoute: Routes = [
  {path:"",redirectTo: "home",pathMatch:"full"},
  {path: "home",component:HomepageComponent},
  {path: "product",component:ProductComponent,canActivate:[CanActivateService]},
  {path: "contact",component:ContactUsComponent,canDeactivate:[CanDeactivateService]}
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactUsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [CanActivateService,AuthService,CanDeactivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
