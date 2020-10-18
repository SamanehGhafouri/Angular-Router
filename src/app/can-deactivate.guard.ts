import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {CrisisDetailComponent} from './crisis-center/crisis-detail/crisis-detail.component';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard{
  canDeactivate(component: CanComponentDeactivate){
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
