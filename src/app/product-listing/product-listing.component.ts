import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  sub_category = '';
  category= '';
  productList= [];
  constructor( private route:  ActivatedRoute, private api: ApiService, private cartService: CartService) { }

  ngOnInit() {
  this.route.queryParamMap.subscribe(val=> {
    console.log(val['params']);
    this.category = (val['params']['category']);
    this.sub_category = (val['params']['sub_category']);
    this.api.post(`/productsbysubcategory`,{sub_category_name: this.sub_category}).subscribe(val => {
      console.log(val);
      this.productList = val['products'];
    })
  })
  // this.sub_category = (this.route.snapshot.queryParams['category']);
  // this.category = (this.route.snapshot.queryParams['sub_category']);
  
  }
  addToCart(obj) {
    console.log(obj);
    this.cartService.addItem(obj);
  }
}
