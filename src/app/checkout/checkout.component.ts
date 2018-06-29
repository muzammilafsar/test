import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  addressForm: FormGroup;
  constructor(private cart: CartService) { }

  ngOnInit() {
    this.addressForm = new FormGroup( {
      'name' : new FormControl('',[Validators.required])
    })
  }
  get shoppingCart() {
    return this.cart.productList;
  }
  get totalAmount() {
    return this.cart.CarttotalAmount();
  }

}
