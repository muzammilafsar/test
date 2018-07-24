import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {
  orders = [];
  fetchingOrders: Boolean = false;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getAllOrders();
  }
  getAllOrders() {
    const auth = localStorage.getItem('auth');
    this.fetchingOrders = true;
    this.api.post('/getorders', {auth: auth}).subscribe(val => {
      console.log(val);
      if (val['status'] === 200) {
        this.orders = val['orders'];
      }
      this.fetchingOrders = false;
    });
  }
}
