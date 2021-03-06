import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//import services
import { AuthenticationService, UserService,NotificationService,CommonService } from './services/services';

//import guards
import { AuthGuard } from './guards/guards';

import { AppComponent } from './app.component';
import { routing }        from './app.routing';


import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

import { AuthModule } from './auth.module';
import { OidcSecurityService } from './services/authentication/oidc.security.service';

//Those for testing purpose
// used to create fake backend
//import { fakeBackendProvider } from './fakeTest/fake.backend';
//import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AuthModule.forRoot()

  ],
  providers: [ 
    AuthGuard,
    AuthenticationService,
    UserService,
    NotificationService,
    CommonService,
    OidcSecurityService,

       // providers used to create fake backend
       // fakeBackendProvider,
       // MockBackend,
        BaseRequestOptions
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
