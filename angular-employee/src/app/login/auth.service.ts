import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user): Observable<any> {
    console.log('login service', user);

    const body = JSON.stringify(user);

    return this.http.post('http://localhost:3000/login', body, httpOptions);
  }
}
