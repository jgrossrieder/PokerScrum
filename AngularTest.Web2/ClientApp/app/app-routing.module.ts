import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {CardSelectionComponent} from './cards/card-selection.component';
import {CardWaitComponent} from './cards/card-wait.component';
import {PageNotFoundComponent} from './page-not-found.component'

 const routes: Routes= [
     {path: '', pathMatch:'full',redirectTo:'card-selection',},
     {path:'card-selection', component: CardSelectionComponent},
     {path:'card-wait/:id', component:CardWaitComponent},
     {path:'**', pathMatch:'full', component: PageNotFoundComponent}
 ];
 @NgModule({
     imports:[RouterModule.forRoot(routes)],
     exports:[RouterModule]
 })
 export class AppRoutingModule{}

 export const routableComponents =[
     CardSelectionComponent,
     CardWaitComponent,
     PageNotFoundComponent
 ]