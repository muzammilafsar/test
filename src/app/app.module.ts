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
import { homedir } from 'os';
import { ProductListingComponent } from './product-listing/product-listing.component';

const AppRoutes: Routes = [
  {
    path: '' ,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomepageComponent},
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
    ProductListingComponent
  ],
  imports: [
    BrowserModule, UiModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
