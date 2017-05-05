import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AppSetting } from '../../app.settings'

@Injectable()
export class AuthenticationService {

    isTestApi: boolean;
    apiUrl: string;
    private headers: Headers;
    private options: RequestOptions;
    constructor(private http: Http) {
        this.isTestApi = AppSetting.mocktestapi;
        this.apiUrl = AppSetting.apiendpoint;
        this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.options = new RequestOptions({ headers: this.headers });
    }


    login(username: string, password: string) {
        var loginApiUrl = '';
        if (this.isTestApi == true) {
            loginApiUrl = '/api/authenticate';
        }
        else {
            loginApiUrl = `${this.apiUrl}/connect/token`;
        }
       
       const params: any = {
            client_id: 'clientPassword',
            client_secret: 'secret',
            grant_type: 'password',
            username: username,
            password: password,
            scope: 'RobustAPI'
        };

        const body: string = this.encodeParams(params);

        return this.http.post(loginApiUrl, body, this.options)

            .map((response: Response) => {
                console.log(response)
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log(user)
                if (user && user.access_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

     private encodeParams(params: any): string {
        let body: string = "";
        for (const key in params) {
            if (body.length) {
                body += "&";
            }
            body += key + "=";
            body += encodeURIComponent(params[key]);
        }
        return body;
    }

}
