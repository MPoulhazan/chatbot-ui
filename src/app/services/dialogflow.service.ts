import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as uuid from 'uuid';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DialogflowService {
    private baseURL =
        'https://us-central1-bebot-hikvtw.cloudfunctions.net/root/intent';
    private token: string = environment.token;

    constructor(private http: HttpClient) {}

    public getResponse(query: string): Observable<Object> {
        const data = {
            query: query,
            lang: 'fr',
            sessionId: uuid.v4(),
        };
        return this.http
            .get(`${this.baseURL}`, this.getOptions(query))
            .map((res) => {
                return res;
            });
    }

    private readonly getOptions = (query: string) => {
        return {
            headers: new HttpHeaders({
                Authorization: `Bearer ${this.token}`,
                query: query,
            }),
        };
    };
}
