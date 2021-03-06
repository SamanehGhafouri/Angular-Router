import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, NavigationExtras, Route} from '@angular/router';
import {AuthService} from './auth.service';
import {CanLoad} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true|UrlTree {
    const url: string = state.url;
    return this.checkLogin(url);
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): true|UrlTree {
    return this.canActivate(route, state);
  }
  checkLogin(url: string): true|UrlTree{
    if (this.authService.isLoggedIn){return true; }
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;
    // Create a dummy session id
    const sessionId = 123456789;
    // Set our navigation extras object
    // that contains our global query params and fragment
    const navigationExtras: NavigationExtras = {
      queryParams: { session_id: sessionId },
      fragment: 'anchor'
    };
    // Redirect to the login page
    return this.router.createUrlTree(['/login'], navigationExtras);
  }
  // Guarding unauthorized loading of feature module
  canLoad(route: Route): boolean{
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }
}
