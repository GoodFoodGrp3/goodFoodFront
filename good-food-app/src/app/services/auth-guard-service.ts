import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LoginService } from "./login-service";

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuardService implements CanActivate
  {
  
    constructor(public login: LoginService, public router: Router) { }
  
    canActivate(){
      if(sessionStorage.getItem('token') != null && sessionStorage.getItem('token')!.length > 1)
      {
        return true;
      }
      console.log("Can't activate")
      this.router.navigateByUrl('/home');
      return false;
  
    }
  }