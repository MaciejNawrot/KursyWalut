import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Currency } from './currency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animateEnter', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.3s ease-in', keyframes([
            style({opacity: 0, transform: 'translateX(-20%)', offset: 0}),
            style({opacity: 1, transform: 'translateX(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

  ]
})




export class AppComponent implements OnInit {
  currencyArr: Currency[] = [];
  clickedArr: Currency[] = [];
  currencyType: string = 'PLN';



  constructor(private http: HttpClient ){}

  ngOnInit(){
    this.downloadCurrency();
    setInterval(() => {
      this.updateCurrency();
    }, 30000);
  }

  downloadCurrency(){
    this.http.get('https://exchangeratesapi.io/api/latest?base=' + this.currencyType)
    .subscribe(
      (res: any) => {
        //const currency = res;
        //console.log(typeof res);
        let currency = res.rates;
        Object.entries(currency).forEach(
        (item, index) => {
          this.currencyArr.push(new Currency(item[0],item[1],0));
        });
      }
    );
  }

  updateCurrency(){
    this.http.get('https://exchangeratesapi.io/api/latest?base=')
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

  onCurrencyFired(currency: Currency){
    this.clickedArr.push(new Currency(currency.name, currency.value, currency.favorite));

  }


}
