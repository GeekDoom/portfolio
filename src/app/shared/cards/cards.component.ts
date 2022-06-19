import { Component, Input, OnInit } from '@angular/core';
import { CardsService } from 'src/app/core/services/cards.service';
import { Card } from '../interfaces/Cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: [
  ]
})
export class CardsComponent implements OnInit {

  demos!: Card[]

  constructor(private cs: CardsService) { }

  ngOnInit(): void {

    this.cs.getCards()
      .subscribe(card => {
        this.demos = card
      });

  }




}
