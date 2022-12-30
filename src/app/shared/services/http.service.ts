import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private _DOMAIN = 'https://fakestoreapi.com/';
  constructor(private http: HttpClient) {}
  sendGetRequest(api: string, httpParams?: any): Observable<any> {
    let params;
    if (httpParams) {
      params = new HttpParams().appendAll(httpParams);
    }
    return this.http.get(this.getEndpoint(api), {
      params,
    });
  }
  sendPostRequest(api: string, body: any) {
    return this.http.post(this.getEndpoint(api), {
      body,
    });
  }
  private getEndpoint(api: string) {
    return this._DOMAIN + api;
  }
}
