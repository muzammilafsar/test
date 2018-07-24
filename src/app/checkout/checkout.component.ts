import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  addressForm: FormGroup;
  slotForm: FormGroup;
  payForm: FormGroup;
  todayDate;
  TommorowDate;

  constructor(private cart: CartService, private api: ApiService, private router: Router, private loginService: LoginService) {
    if (!this.loginService.loggedIn) {
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    this.addressForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'mobile': new FormControl('', [Validators.required]),
      'pincode': new FormControl('', [Validators.required]),
      'locality': new FormControl('', [Validators.required]),
      'address': new FormControl('', [Validators.required]),
      'city': new FormControl('aligarh', [Validators.required])
    })
    this.slotForm = new FormGroup({
      'slot': new FormControl('slot1', [Validators.required])
    });
    this.payForm = new FormGroup({
      'paymode': new FormControl('cash', [Validators.required])
    });
  }
  get shoppingCart() {
    return this.cart.productList;
  }
  get totalAmount() {
    return this.cart.CarttotalAmount();
  }
  get loggedIn() {
    return this.loginService.loggedIn;
  }
  confirmOrder() {
    if (this.addressForm.valid && this.payForm.valid && this.slotForm.valid) {
      console.log('address valid');
      this.api.post('/neworder', { user: 'asdad', mobile: '8802868625', items: this.cart.productList,
       delivery_address: this.addressForm.value, ...this.slotForm.value, ...this.payForm.value })
        .subscribe(val => {
          if (val['status'] === 200) {
            this.api.confirmedOrder = val['order'];
            this.cart.emptyCart();
            this.router.navigate(['orderconfirmed']);
          }
          console.log(val);
        });
    } else {
      console.log('error');
      (<any>Object).values(this.addressForm.controls).forEach(control => {
        control.markAsTouched();
      });
      document.getElementById('addressForm').scrollIntoView();
    }
  }
}
