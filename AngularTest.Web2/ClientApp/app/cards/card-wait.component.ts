import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card, CardService } from './card.service'

@Component({
    template: require('./card-wait.component.html')
})
export class CardWaitComponent implements OnInit {
    @Input() card: Card;

    private id: any;

    constructor(
        private cardService: CardService,
        private route: ActivatedRoute,
        private router: Router) { }


    ngOnInit() {
        if (!this.card) {
            this.route
                .params
                .map(params => params['id'])
                .do(id => this.id = +id)
                .subscribe(id => this.getCard());
        }
    }

    private getCard() {
        this.cardService.getCard(this.id)
            .subscribe(character => this.setEditCharacter(character));
    }

  private goToCards() {
    let route = ['/card-selection'];
    this.router.navigate(route);
  }

  private setEditCharacter(card: Card) {
    if (card) {
      this.card = card;
    } else {
      this.goToCards();
    }
  }
}