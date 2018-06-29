import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cart: CartService) { }

  ngOnInit() {

  }
  get shoppingCart() {
    return this.cart.productList;
  }
  get totalAmount() {
    return this.cart.CarttotalAmount();
  }

}
