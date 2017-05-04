import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AppSetting } from '../../app.settings'

@Injectable()
export class AuthenticationService {

    isTestApi: boolean;
    apiUrl: string;

    constructor(private http: Http) {
        this.isTestApi = AppSetting.mocktestapi;
        this.apiUrl = AppSetting.apiendpoint;
    }

    login(username: string, password: string) {
        var loginApiUrl = '';
        if (this.isTestApi == true) {
            loginApiUrl = '/api/authenticate';
        }
        else {
            loginApiUrl = `${this.apiUrl}/connect/token`;
        }

        return this.http.post(loginApiUrl, JSON.stringify(
            { 
                username: username, password: password ,scope: 'RobustAPI' ,'grant-type':'password'
            }))
            .map((response: Response) => {
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

}
