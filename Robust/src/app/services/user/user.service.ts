import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../../models/models';
import { AppSetting } from '../../app.settings'


@Injectable()
export class UserService {

    isTestApi: boolean;
    apiUrl: string;

    constructor(private http: Http) {
        this.isTestApi = AppSetting.mocktestapi;
        this.apiUrl = AppSetting.apiendpoint;
    }

    getAll() {

        var getAllApiUrl = '';
        if (this.isTestApi == true) {
            getAllApiUrl = '/api/users';
        }
        else {
            getAllApiUrl = `${this.apiUrl}/account/getall`;
        }

        return this.http.get(getAllApiUrl, this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {

        var getByIdApiUrl = '';
        if (this.isTestApi == true) {
            getByIdApiUrl = '/api/users/';
        }
        else {
            getByIdApiUrl = `${this.apiUrl}/account/getbyid`;
        }

        return this.http.get(getByIdApiUrl + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {

        var createApiUrl = '';
        if (this.isTestApi == true) {
            createApiUrl = '/api/users';
        }
        else {
            createApiUrl = `${this.apiUrl}/account/register`;
        }

        return this.http.post(createApiUrl, user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {

        var updateApiUrl = '';
        if (this.isTestApi == true) {
            updateApiUrl = '/api/users/';
        }
        else {
            updateApiUrl = `${this.apiUrl}/account/update`;
        }

        return this.http.put(updateApiUrl + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        var deleteApiUrl = '';
        if (this.isTestApi == true) {
            deleteApiUrl = '/api/users/';
        }
        else {
            deleteApiUrl = `${this.apiUrl}/account/delete`;
        }

        return this.http.delete(deleteApiUrl + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.access_token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.access_token });
            return new RequestOptions({ headers: headers });
        }
    }
}
