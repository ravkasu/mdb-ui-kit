import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router:Router){}

  private getListUrl=`https://reqres.in/api/users?page=2`;


  logout(){
    this.router.navigate(['login']);
    localStorage.removeItem('session');
    localStorage.removeItem('token');

    sessionStorage.removeItem('session');
    console.log("Logged Out");
  }
  jsonData: any[] = [];
  isDataFetched:boolean = true;


  getList(){
    if(sessionStorage.getItem('session')){
      fetch(this.getListUrl)
      .then(response=>response.json())
      .then(data=>{
        const json=JSON.stringify(data);
        console.log(json);
        this.isDataFetched = true;
        this.jsonData = data.data;

      });
    }
    else{
      alert("User already Logout");
      this.router.navigate(['login']);

    }
    

  }

}


