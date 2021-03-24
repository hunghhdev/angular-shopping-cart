import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PromoCodeComponent } from './promo-code/promo-code.component';

import localeVi from '@angular/common/locales/vi';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeVi, 'vi-VN');
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartSummaryComponent,
    ProductListComponent,
    PromoCodeComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
