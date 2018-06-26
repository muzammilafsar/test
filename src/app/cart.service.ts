import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  productList = [];
  constructor() { 
    let list  = JSON.parse(localStorage.getItem('cart'));
    if(list) {
      this.productList = list;
    }
  }
  addItem(product) {
    let found = false;
    this.productList.map(val => {
      if(product._id === val._id ) {
        found = true;
      }
    });
    if (found) {
      this.increment(product);
    } else {
      product.quantity = 1;
      this.productList.push(product);
      this.saveList();
    }
  }
  increment(product) {
    let index = this.productList.findIndex(val => val._id === product._id);
    this.productList[index].quantity = this.productList[index].quantity + 1;
    this.saveList();
  }
  decrement(product) {
    let index = this.productList.findIndex(val => val._id === product._id);
    if( this.productList[index].quantity > 1) {
      this.productList[index].quantity = this.productList[index].quantity - 1;
    } else {
      this.productList.splice(index, 1);
    }
    this.saveList();
  }
  remove(product) {
    let index = this.productList.findIndex(val => val._id === product._id);
    this.productList.splice(index, 1);
    this.saveList();
  }
  saveList(){
    localStorage.setItem('cart', JSON.stringify(this.productList));
  }


}
