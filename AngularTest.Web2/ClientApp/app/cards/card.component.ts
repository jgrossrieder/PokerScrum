import {Component, Input} from '@angular/core';
import {Card} from './card.service'

@Component({
  selector: 'my-card',
  template: require('./card.component.html')
})                   
export class CardComponent {
  @Input() card: Card;
}
