import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from './services/authentication/oidc.security.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works Test!';

  constructor(public securityService: OidcSecurityService) {
  }

  ngOnInit() {
    console.log('ngOnInit _securityService.AuthorizedCallback');

    if (window.location.hash) {
      this.securityService.AuthorizedCallback();
    }
  }
  public Login() {
    console.log('Do login logic');
    this.securityService.Authorize();
  }

  public Logout() {
    console.log('Do logout logic');
    this.securityService.Logoff();
  }
}
