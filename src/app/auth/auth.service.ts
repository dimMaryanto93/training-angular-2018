import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient) {
  }

  authentication(username: string, password: string) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Basic ${btoa('client-web:123456')}`);

    let params = new HttpParams();
    params = params.append('username', username);
    params = params.append('password', password);
    params = params.append('grant_type', 'password');
    return this._http.post(`/oauth/token`,
      {},
      {
        params: params,
        headers: headers
      });
  }
}
