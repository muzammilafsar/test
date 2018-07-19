import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
loggedIn = false;
  constructor() { 
    let auth = localStorage.getItem('auth');
    console.log(auth);
    if(auth) {
      this.loggedIn = true;
      console.log(this.loggedIn);
    }
  }
  logout(){
    localStorage.removeItem('auth');
    window.location.reload();
  }
}
