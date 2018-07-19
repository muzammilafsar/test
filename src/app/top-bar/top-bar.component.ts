import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  get loginStatus() {
    return this.loginService.loggedIn;
  }
  logout(){
this.loginService.logout();
  }

}
