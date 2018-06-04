import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Currency } from '../currency';

@Injectable()
export class ApiService {
  currencyType: string = 'PLN';
  currencyArr: Currency[] = [];
  constructor(private http: HttpClient) { }

  downloadCurrency(){
    this.http.get('https://exchangeratesapi.io/api/latest?base=' + this.currencyType)
    .subscribe(
      (res: any) => {
        const currency = res.rates;
        Object.entries(currency).forEach(
        (item, index) => {
          this.currencyArr.push(new Currency(item[0],item[1],0));
        });
      }
    );
    return this.currencyArr;
  }

  updateCurrency(){
    this.http.get('https://exchangeratesapi.io/api/latest?base=' + this.currencyType)
    .subscribe(
      (res: any) => {
        const currency = res;
        Object.entries(currency.rates).forEach(
        (item, index) => {
          this.currencyArr.forEach(
            (elem) => {
              if(elem.name === res.name){
                elem.value = res.value;
              }
            }
          );
        });
      }
    );
  }

}
