import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';
import {HeroDetailComponent} from './heroes/hero-detail/hero-detail.component';
import {HeroListComponent} from './heroes/hero-list/hero-list.component';
import {FormsModule} from '@angular/forms';
import {HeroService} from './heroes/hero.service';
import {MessageService} from './message.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CrisisDetailComponent } from './crisis-center/crisis-detail/crisis-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent,
    CrisisDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HeroesModule,
    AppRoutingModule,
    BrowserAnimationsModule

  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
