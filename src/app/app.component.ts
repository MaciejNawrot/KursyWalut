import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { Currency } from './currency';

import { ApiService } from './service/api.service';

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



  constructor(private http: HttpClient, private apiService: ApiService){}

  ngOnInit(){
    this.currencyArr = this.apiService.downloadCurrency();
    setInterval(() => {
      this.apiService.updateCurrency();
    }, 30000);
  }





  onCurrencyFired(currency: Currency){
    this.clickedArr.push(new Currency(currency.name, currency.value, currency.favorite));

  }


}
