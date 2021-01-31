import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as uuid from 'uuid';

@Injectable()
export class DialogflowService {
    private baseURL = 'https://api.dialogflow.com/v1/query?v=20150910';
    private token: string = environment.token;

    constructor(private http: HttpClient) {}

    public getResponse(query: string) {
        const data = {
            query: query,
            lang: 'fr',
            sessionId: uuid.v4(),
        };
        return this.http
            .post(`${this.baseURL}`, data, this.getOptions())
            .map((res) => {
                return res;
            });
    }

    private readonly getOptions = () => {
        return {
            headers: new HttpHeaders({ Authorization: `Bearer ${this.token}` }),
        };
    };
}
