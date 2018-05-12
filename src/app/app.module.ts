import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';
import { FavoritesComponent } from './favorites/favorites.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
