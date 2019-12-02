import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {User} from '../users/user';
import {AccountInfoUpdate} from '../models/account-info-update';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, httpOptions);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, httpOptions);
  }

  createUser(user: User) {
    return this.http.post(`${this.baseUrl}`, user, httpOptions);
  }

  updateUser(user: AccountInfoUpdate) {
    return this.http.put(`${this.baseUrl}`, user, httpOptions);
  }

  deleteUserById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
