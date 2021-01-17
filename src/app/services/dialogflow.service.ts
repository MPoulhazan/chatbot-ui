import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import { environment } from "@env/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class DialogflowService {
  private baseURL: string = "https://api.dialogflow.com/v1/query?v=20150910";
  private token: string = environment.token;

  constructor(private http: HttpClient) {}

  public getResponse(query: string) {
    let data = {
      query: query,
      lang: "fr",
      sessionId: "12345", // TODO: Générer keygen
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
