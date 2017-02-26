import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

export class Card {
    constructor(public id: number, public text: string, public order: number, public color: string) { }
}

@Injectable()
export class CardService {

    constructor(private http: Http) {

    }

    getCards() {
        return this.http.get('api/cards.json')
            .map((response: Response) => <Card[]>response.json().data)
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        let msg = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(msg);
    }

    getCard(id: number) {
        return this.getCards()
            .map(cards => cards.find(card => card.id === id));
    }   
}