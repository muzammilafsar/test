import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getAllOrders();
  }
  getAllOrders() {
    let auth = localStorage.getItem('auth');
    this.api.post('/getorders',{auth: auth}).subscribe(val => {
      console.log(val);
    });
  }
}
