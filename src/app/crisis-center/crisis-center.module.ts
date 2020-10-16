import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {CrisisService} from './crisis.service';
import {MessageService} from './message.service';
import {CrisisDetailComponent} from './crisis-detail/crisis-detail.component';
import {FormsModule} from '@angular/forms';
import {DialogService} from './dialog.service';


@NgModule({
  declarations: [CrisisCenterComponent, CrisisCenterHomeComponent, CrisisListComponent, CrisisDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule
  ],
  providers: [CrisisService, MessageService, DialogService]
})
export class CrisisCenterModule { }
