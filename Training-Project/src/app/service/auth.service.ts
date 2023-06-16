import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logStatus:boolean=false;

  private url=`https://reqres.in/api/login`;

  constructor(private http:HttpClient) { }

  getData(): Observable<any> {
    this.http.get<any>(`${this.url}`).subscribe((data:any)=>{
      console.log(data);
    },
    (error: any) => {
      console.error(error);
    });
    return this.http.get<any>(`${this.url}`);
  }


  islogin(username:string,password:string):Observable<any>{
    const loginData={
      username:username,
      password:password
    };

    this.http.post(this.url,loginData).subscribe((data:any)=>{
      console.log(data.token);
      
      localStorage.setItem('token', data.token);

      this.setSession(username,data.token);
      this.checkSessionExpiration();

      // Set an interval to check for expired sessions periodically
      setInterval(() => {
        this.checkSessionExpiration();
      }, 60000);


     });

     this.checkSessionExpiration();

  // Set an interval to check for expired sessions periodically
  setInterval(() => {
    this.checkSessionExpiration();
  }, 100000);


   return this.http.post(this.url,loginData); 
  }


  checkSessionExpiration() {
    const sessionData = sessionStorage.getItem('session');
  
    if (sessionData) {
      const session = JSON.parse(sessionData);
  
      // Check if the session has expired
      if (new Date().getTime() > session.expiration) {
        // Session has expired, remove it from localStorage
        localStorage.removeItem('session');
        sessionStorage.removeItem('session');
      }
    }
  }
  

  setSession(un : String, tok : String) {
    const sessionData = {
      username: un,
      token: tok,
      expiration: new Date().getTime() + 600000 // Set expiration time to one hour from the current time
    };
    localStorage.setItem('session', JSON.stringify(sessionData));
    sessionStorage.setItem('session', JSON.stringify(sessionData));
  }

  isLoggedIn(){
    if(sessionStorage.getItem('session')!==null){
      //console.log(localStorage.getItem('session'))
      this.logStatus=true;
    }
    return this.logStatus;
  }

  logout(){

    if(this.logStatus){
      this.logStatus=false;
      localStorage.removeItem('session');
    }
  }

}
  

