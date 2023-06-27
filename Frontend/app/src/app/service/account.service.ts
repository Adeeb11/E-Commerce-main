import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class AccountService {
    private baseUrl = 'http://localhost:8080';

    constructor(private httpClient: HttpClient) { }
  
    register(user: any): Observable<any> {
      const url = `${this.baseUrl}/register`;
      return this.httpClient.post(url, user);
    }
  
    login(username: string, password: string): Observable<any> {
      const url = `${this.baseUrl}/login`;
      return this.httpClient.post(url, { username, password });
    }
}