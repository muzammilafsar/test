import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
@Injectable()
export class ApiService {
  confirmedOrder = null;
  // baseUrl = "http://localhost:3000";
  baseUrl = 'https://grocstoreapi.herokuapp.com';
  allCatWithSubCat = [];
  constructor(private http: HttpClient) { }
  get(url) {
    return this.http.get(`${this.baseUrl}${url}`);
  }
  post(url, body) {
    return this.http.post(`${this.baseUrl}${url}`, body);
  }
}
