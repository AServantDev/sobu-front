import {Injectable} from '@angular/core';

import {tap} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  baseUrl: 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  attemptAuth(email: string, password: string): Observable<any> {
    const credentials = {username: email, password: password};
    console.log('attempAuth ::');
    return this.http.post<any>('http://localhost:8080/token/generate-token', credentials)
    .pipe(tap(res => this.setSession));
  }


  private setSession(authResult) {

    localStorage.setItem('id', authResult.idToken);
    console.log(authResult.idToken);
}

}