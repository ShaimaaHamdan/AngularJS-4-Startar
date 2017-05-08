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
  public static apiendpoint = 'http://robustapi.tmentorsinc.com';
  // public static apiendpoint = 'http://localhost:63517';
  // public static realapiendpoint = 'http://localhost:63717/api';
  
  // public static apiendpoint = 'http://52.166.73.135';
  public static realapiendpoint = 'http://robustapi.tmentorsinc.com/api';
  public static mocktestapi = false;

}

