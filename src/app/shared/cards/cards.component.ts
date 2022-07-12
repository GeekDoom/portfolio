import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { CardsService } from 'src/app/core/services/cards.service';
import { Card } from '../interfaces/Cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: [
  ]
})
export class CardsComponent implements OnInit, OnChanges {

  demos!: Card[]

  constructor(
    private cs: CardsService,
    public _router: Router,
    public _location: Location
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.cs.getCards()
      .subscribe(card => {
        this.demos = card
      });
  }

  ngOnInit(): void {

    this.cs.getCards()
      .subscribe(card => {
        this.demos = card
      });

  }


  delete(demo: Card) {
    this.cs.deleteItem(demo._id)
      .subscribe(card => { })
    setTimeout(() => {
      this._router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
        this._router.navigate([decodeURI(this._location.path())]);
      });
    }, 500)
  }

}
