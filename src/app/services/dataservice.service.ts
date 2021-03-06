import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { TokenStorage } from '../core/token.storage';
import { Food } from '../model/food';
import { ShredProgram } from '../model/shredProgram';
import { BuildProgram } from '../model/buildProgram';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private token: TokenStorage , private httpClient: HttpClient) { }

  public createNewUser(newUser: User): Observable<User>{
    return this.httpClient.post<User>('http://localhost:8080/api/user/newUser', newUser);
  }
  public deleteUser(user: User): Observable<User>{
    return this.httpClient.delete<User>('http://localhost:8080/api/user/deleteUser');
  }

  public getAllUser(): Observable<User[]>
{
  return this.httpClient.get<User[]>('http://localhost:8080/api/user/allUser')
}
// users:User[]
//dans le ngOnInit this.getAll()
//methods getAll(): void {this.dataservice.getAll().subscribe(users => this.users = users)}

// public getUserByMailAndPassword(email: string, password: string): Observable<User>{
//   return this.httpClient.get<User>('http://localhost:8080/api/user/getUserEmailPass');
// }
public connectUser(email:string, password: string){
  return this.httpClient.get('http://localhost:8080/api/user/connect');
}
public getUserByMailAndPassword(userToGet: User): Observable<User>{
  return this.httpClient.post<User>('http://localhost:8080/api/user/getUserEmailPass', userToGet);
}

public getUsers(): Observable<User[]> {
  return this.httpClient.get<User[]>('http://localhost:8080/api/user/allUser');
}

public getUser(id: number): Observable<User> {
  return this.httpClient.get<User>(`http://localhost:8080/api/user/getUser/` + id);
}
public getUserByUsername(username: string): Observable<User> {
  return this.httpClient.get<User>(`http://localhost:8080/api/user/getUserByUsername/`+ username);
}
public logOut(): void{
  this.token.signOut();
}
public getFoods(): Observable<Food[]>{
  return this.httpClient.get<Food[]>('http://localhost:8080/api/food/allFood');
}
public getFood(id: number): Observable<Food>{
  return this.httpClient.get<Food>('http://localhost:8080/api/food/getFood/' +id);
}
public createNewFood(newFood: Food): Observable<Food>{
  return this.httpClient.post<Food>('http://localhost:8080/api/food/newFood', newFood);
}

public subscribeShred(idUser: number, newShred: ShredProgram): Observable<ShredProgram>{
  return this.httpClient.post<ShredProgram>(`http://localhost:8080/api/program/newShred/` + idUser, newShred) ;
}
public getShred(idShred: number): Observable<ShredProgram>{
  return this.httpClient.get<ShredProgram>(`http://localhost:8080/api/program/getShred/` + idShred);
}

public subscribeBuild(idUser: number, newBuild: BuildProgram): Observable<BuildProgram>{
  return this.httpClient.post<BuildProgram>(`http://localhost:8080/api/program/newBuild/` + idUser, newBuild) ;
}
public getBuild(idBuild: number): Observable<BuildProgram>{
  return this.httpClient.get<BuildProgram>(`http://localhost:8080/api/program/getBuild/` + idBuild);
}



}

