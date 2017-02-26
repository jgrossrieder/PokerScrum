import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule, routableComponents} from './app-routing.module';
import { CardComponent} from './cards/card.component'

import {CardService} from './cards/card.service'
import './rxjs-extensions';

@NgModule({
  declarations: [
    AppComponent,
    routableComponents,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers:[CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
