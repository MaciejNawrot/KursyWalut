import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Currency } from '../currency';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  @Input() currency: Currency;
  @Output() currencyFired = new EventEmitter<Currency>();

  constructor() { }

  ngOnInit() {
  }

  addToFavorites(){
    this.currency.favorite = 1;
    this.currencyFired.emit(this.currency);
  }
}
