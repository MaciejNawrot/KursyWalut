import { Component, OnInit, Input } from '@angular/core';

import { Currency } from '../currency';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']

})
export class FavoritesComponent implements OnInit {
  @Input() currency: Currency;
  constructor() { }

  ngOnInit() {
  }

  removeFromFavorite(){
    this.currency.favorite = 0;
  }
}
