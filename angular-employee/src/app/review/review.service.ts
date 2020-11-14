import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  url = 'http://localhost:3000/reviews/';
  constructor(private http: HttpClient) {}
  getUserReviews(id): Observable<any> {
    return this.http.get(this.url + id);
  }
}
