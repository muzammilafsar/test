import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-category-sidebar',
  templateUrl: './category-sidebar.component.html',
  styleUrls: ['./category-sidebar.component.css']
})
export class CategorySidebarComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  get categories() {
    return this.api.allCatWithSubCat;
  }

}
