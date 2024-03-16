import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //URLS from the backend
  private appURL: string = 'https://localhost:44342/';
  private apiURL: string = 'api/User/'

  //Using the module HttpClient that allow the communication between backend and frontend
  constructor(private http: HttpClient) { }

  //method to communicate with the backend and get all the users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.appURL}${this.apiURL}`);
  }

  //Method to communicate with the backend and get a specific user
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.appURL}${this.apiURL}${id}`);
  }

  //method to communicate with the backend and delete the user with the specified id
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.appURL}${this.apiURL}${id}`);
  }

  //method to communicate with the backend and add a new user
    addUser (user: User): Observable<User> {
    return this.http.post<User>(`${this.appURL}${this.apiURL}`, user);
  }

  //method to communicate with the backend and update a specific user
  updateUser(id: number, user: User): Observable<void> {
    return this.http.put<void>(`${this.appURL}${this.apiURL}${id}`, user);
  }
}
