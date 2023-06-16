import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, ReactiveFormsModule,Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginform!: FormGroup;
  username:any;
  password:any;

  ngOnInit():void{

  }
  constructor(private formBuilder:FormBuilder,private authservice:AuthService,private router: Router){

    // console.log("QWERTY");
    this.loginform=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
    });
    // console.log("QWERTY123456");

  }
  onSubmit(){
    if(this.loginform.invalid){
      alert("Invalid");
    return;
  }
  else{

  this.username=this.loginform.get('username')?.value;
  this.password=this.loginform.get('password')?.value;

  // this.authservice.getData();
  console.log(this.authservice.islogin(this.username,this.password));

  if(sessionStorage.getItem('session')){
    this.router.navigate(['/home']);
  }
}

  // localStorage.setItem()
}
canExit(){
  if(this.username || this.password){
    return confirm("you have unsaved changes do you really want to leave");
  }
  else{
    return true;
  }
}

}
