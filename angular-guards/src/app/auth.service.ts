export class AuthService{
    loggedIn: boolean=false;
    login(){
        this.loggedIn=true;
    }
    logout(){
        this.loggedIn=false;
    }
    isAuthenticated(){
        console.log(this.loggedIn);
        return this.loggedIn;
    }
}