import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Currency } from '../currency';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  @Input() currency: Currency;
  @Output() currencyFired = new EventEmitter<Currency>();

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }

  addToFavorites(){
    this.currency.favorite = 1;
    this.currencyFired.emit(this.currency);
  }
}
