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
  
  this.sub_category = (this.route.snapshot.queryParams['category']);
  this.category = (this.route.snapshot.queryParams['sub_category']);
  this.api.get(`/productsbysubcategory/${this.sub_category}`).subscribe(val => {
    console.log(val);
    this.productList = val['products'];
  })
  }
  addToCart(obj) {
    console.log(obj);
    this.cartService.addItem(obj);
  }
}
