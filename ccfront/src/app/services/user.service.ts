import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { USER } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:2099/db/users';

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get(this.url);
  }
  deleteUser(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
  postUser(user: USER): Observable<any> {
    return this.http.post(this.url, user);
  }
  getUserPorId(id: string):Observable<any>{
    return this.http.get(this.url + id)
  }
}
