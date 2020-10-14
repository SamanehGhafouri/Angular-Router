import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {HeroesListComponent} from './heroes-list/heroes-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path: 'crisis-list', component: CrisisListComponent},
  {path: 'heroes', component: HeroesListComponent},
  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  // forRoot() -> to ensures that the app only instantiates one RouterModule
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
