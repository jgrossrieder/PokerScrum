import { Component, OnInit } from '@angular/core'
import { Card,CardService } from './card.service'
import {Observable} from 'rxjs/Observable';

@Component({
    selector: "app",
    template: require('./card-selection.component.html')
})
export class CardSelectionComponent implements OnInit {
    cards : Observable<Card>;
    selectedCard: Card;
    errorMessage: string;

    constructor(private cardService: CardService) {
    }

    ngOnInit() {
        this.cards= this.cardService.getCards();
    }

    select(card: Card) {
        //Todo propagate
    }
}