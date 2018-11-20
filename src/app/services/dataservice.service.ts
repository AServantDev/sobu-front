import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private httpClient: HttpClient) { }

  public createNewUser(newUser: User): Observable<User>{
    return this.httpClient.post<User>('http://localhost:8080/api/user/newUser', newUser);
  }
  public deleteUser(user: User): Observable<User>{
    return this.httpClient.delete<User>('http://localhost:8080/api/user/deleteUser');
  }

}