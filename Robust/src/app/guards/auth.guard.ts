import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { OidcSecurityService } from '../services/authentication/oidc.security.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,public securityService: OidcSecurityService) { }

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      
    if (localStorage.getItem('authorizationData')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    this.securityService.AuthorizedCallback();

    return false;

  }
}
