import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  orderDetails;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    if( this.api.confirmedOrder ) {
      this.orderDetails = this.api.confirmedOrder;
      this.api.confirmedOrder = null;
    } else {
      this.router.navigate([""]);
    }
  }

}
