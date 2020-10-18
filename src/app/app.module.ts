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
import {CrisisCenterModule} from './crisis-center/crisis-center.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import {AdminModule} from './admin/admin.module';
import {AuthModule} from './auth/auth.module';
import {DialogService} from './dialog.service';



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
    CrisisCenterModule,
    AuthModule,
    AdminModule,
    AppRoutingModule,

  ],
  providers: [HeroService, MessageService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
