import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the appsetting provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppSetting {

  // we will using task to replace this url
  public static apiendpoint = 'http://localhost:8100/api';
  public static mocktestapi = true;

}
