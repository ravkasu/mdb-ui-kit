import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  firstname: any;
  lastname: any;
  email: any;
  comment: any;

  canExit(){
    if(this.firstname || this.lastname || this.email || this.comment){
      return confirm("you have unsaved changes do you really want to leave");
    }
    else{
      return true;
    }
  }

}
