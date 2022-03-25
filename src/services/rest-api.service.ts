import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const TRIAL_TOKEN = '06aef429-a981-3ec5-a1f8-71d38d86481e';

@Injectable()
export class RestApiService {
  protected headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
  }

  public createAuthorizationHeader(token: string = ''): HttpHeaders {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + token,
        Authorization: 'Bearer ' + TRIAL_TOKEN,
      });
    return headers;
  }

  public sendPostData<O>(url: string, obj: O): Observable<object> {
    return this.http.post(url, obj, { headers: this.headers }).pipe(map(this.tokenRefresh));
  }


  public sendPost<O>(url: string, obj?: object): Observable<object> {
    const token: any = sessionStorage.getItem('token');
    const headersReq = this.createAuthorizationHeader(token);
    return this.http.post(url, JSON.stringify(obj), { headers: headersReq, observe: 'response' }).pipe(map(this.tokenRefresh));
  }

  public sendPut(url: string, obj?: object): Observable<object> {
    const token: any = sessionStorage.getItem('token');
    const headersReq = this.createAuthorizationHeader(token);
    return this.http.put(url, JSON.stringify(obj), { headers: headersReq, observe: 'response' }).pipe(map(this.tokenRefresh));

  }

  public sendPatch(url: string, obj: object): Observable<object> {
    const token: any = sessionStorage.getItem('token');
    const headersReq = this.createAuthorizationHeader(token);
    return this.http.patch(url, JSON.stringify(obj), { headers: headersReq }).pipe(map(this.tokenRefresh));

  }

  public sendDelete<O>(url: string, serchParametter?: URLSearchParams): Observable<object> {
    const token: any = sessionStorage.getItem('token');
    const headersReq = this.createAuthorizationHeader(token);
    const parametterQuery: string = (serchParametter != null) ? '?' + serchParametter.toString() : '';
    return this.http.delete(url + parametterQuery, { headers: headersReq }).pipe(map(this.tokenRefresh));
  }

  public sendGetByEntity(url: string, obj?: any): Observable<object> {
    const evilResponseProps = Object.keys(obj);
    let params = new HttpParams();
    for (const prop of evilResponseProps) {
      params = params.set(prop, obj[prop]);
    }
    return this.http.get(url, { params }).pipe(map(this.tokenRefresh));
  }

  public sendGetByEntityPageAble(url: string, obj?: any): Observable<object> {
    const evilResponseProps = Object.keys(obj);
    let params = new HttpParams();
    for (const prop of evilResponseProps) {
      const value = obj[prop];
      if (value) {
        params = params.set(prop, obj[prop]);
      }
    }

    // const pagesProperties = Object.keys(pageAble);
    // for (const prop of pagesProperties) {
    //   const value = pageAble[prop];
    //   if (value) {
    //     params = params.set(prop, pageAble[prop]);
    //   }
    // }
    return this.http.get(url, { params }).pipe(map(this.tokenRefresh));
  }

  public sendGet(url: string, token: string | any = '', searchParametter?: URLSearchParams): Observable<object> {
    token = sessionStorage.getItem('token');
    // console.log('Token rest-api = ' + token);
    const headersReq = this.createAuthorizationHeader(token);
    const parametterQuery: string = (searchParametter != null) ? '?' + searchParametter.toString() : '';

    return this.http.get(url + parametterQuery, {headers: headersReq, observe: 'response'}).pipe(map(this.tokenRefresh));
  }

  public sendGetResponse(url: string, token: string = '', serchParametter?: URLSearchParams): Observable<object> {
    const headersReq = this.createAuthorizationHeader(token);
    const parametterQuery: string = (serchParametter != null) ? '?' + serchParametter.toString() : '';

    return this.http.get(url + parametterQuery, {headers: headersReq, observe: 'response'});
  }

  public tokenRefresh(response: any): object {
    const authorization = response?.headers?.get('authorization');
    const oldToken  = localStorage.getItem('token');
    if (oldToken !== authorization && authorization !== null){
      localStorage.setItem('token', authorization);
    }
    return response?.body;
   }

}
