import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  categoryList = [];

  constructor(private api : ApiService,  private cartService: CartService) { }

  ngOnInit() {
    this.api.get('/getallcatwithsubcat').subscribe(val => {
      this.categoryList = val['categories'];
      console.log(val['categories']);
    })
  }
  get cartCount() {
    return this.cartService.productList.length;
  }

}
