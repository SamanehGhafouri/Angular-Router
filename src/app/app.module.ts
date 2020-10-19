import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';
import {FormsModule} from '@angular/forms';
import {HeroService} from './heroes/hero.service';
import {MessageService} from './message.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import {AuthModule} from './auth/auth.module';
import {DialogService} from './dialog.service';
import {SelectivePreloadingStrategyService} from './selective-preloading-strategy.service';
import {Router} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ComposeMessageComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,

  ],
  providers: [HeroService, MessageService, DialogService, SelectivePreloadingStrategyService],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    const replacer = (key, value) => (typeof value === 'function') ? value.name:
      value;
    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
