import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AppSetting } from '../../app.settings'

@Injectable()
export class CommonService {

  isTestApi: boolean;
  apiUrl: string;
  realApiUrl: string;

  constructor(private http: Http) {
    this.isTestApi = AppSetting.mocktestapi;
    this.apiUrl = AppSetting.apiendpoint;
    this.realApiUrl = AppSetting.realapiendpoint;
  }

  getAllValues() {
    var getAllApiUrl = `${this.realApiUrl}/values`;
    return this.http.get(getAllApiUrl, this.getJwtHeaderToken()).map((response: Response) => response.json());
  }

  private getJwtHeaderToken() {
    // create authorization header with jwt token
    let token = JSON.parse(localStorage.getItem('authorizationData'));
    console.log(token)
    if (token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + token });
      return new RequestOptions({ headers: headers });
    }
  }
}
