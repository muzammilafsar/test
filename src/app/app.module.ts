import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TopBrandsComponent } from './top-brands/top-brands.component';
import { FooterComponent } from './footer/footer.component';
import { AdSliderComponent } from './ad-slider/ad-slider.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { CartService } from './cart.service';

const AppRoutes: Routes = [
  {
    path: '' ,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomepageComponent},
      {path: 'cart', component: ShoppingCartComponent},
      {path: 'category', component: ProductListingComponent }
    ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HeaderComponent,
    TopBarComponent,
    TopBrandsComponent,
    FooterComponent,
    AdSliderComponent,
    HomepageComponent,
    ProductListingComponent,
    ShoppingCartComponent,
    
  ],
  imports: [
    BrowserModule, UiModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule
  ],
  providers: [ApiService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
