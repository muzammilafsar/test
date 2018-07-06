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
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angular5-social-login';


// Configs
export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('155492531554907')
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('771364566521-b6fmcgoitqs39hiiregqa8os5cblboat.apps.googleusercontent.com')
        },
      ]
  );
  return config;
}

const AppRoutes: Routes = [
  {
    path: '' ,
    component: HomepageComponent,
    children: [
      {path: 'cart', component: ShoppingCartComponent},
      {path: 'category', component: ProductListingComponent },
    ]
  },
  {path: 'checkout', component: CheckoutComponent }
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
    CheckoutComponent,
    LoginSignupComponent,
  ],
  imports: [
    BrowserModule, UiModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SocialLoginModule
  ],
  providers: [ApiService, CartService,
    {
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
