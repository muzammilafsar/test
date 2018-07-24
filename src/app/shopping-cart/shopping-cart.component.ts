import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CartService } from '../cart.service';
import { LoginService } from '../login.service';
import { Router } from '../../../node_modules/@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, AfterViewInit {

  constructor(private cart: CartService, private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {

  }
  get loggedIn(){
    return this.loginService.loggedIn;
  }
  ngAfterViewInit() {
    document.getElementById('mycart').scrollIntoView();
  }
  get shoppingCart() {
    return this.cart.productList;
  }
  get totalAmount() {
    return this.cart.CarttotalAmount();
  }
  goToCheckout() {
    if (this.loginService.loggedIn) {
      this.router.navigate(['checkout']);
    } else {
      $('#myModal').modal('show');
    }
  }
}
