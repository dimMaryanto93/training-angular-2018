import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class AuthService {

  keyToken = 'secretToken';

  constructor(private _http: HttpClient) {
  }

  removeToken() {
    localStorage.removeItem(this.keyToken);
  }

  setAuthenticate(response: any) {
    localStorage.setItem(this.keyToken, response.access_token);
  }

  isAuthenticated(): boolean {
    const item = localStorage.getItem(this.keyToken);
    if (item) {
      return true;
    } else {
      return false;
    }
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

  check_token() {
    const tokenValue = localStorage.getItem(this.keyToken);

    let params = new HttpParams();
    params = params.append('token', tokenValue);

    return this._http.post(`/oauth/check_token`, {}, {params: params});
  }
}
