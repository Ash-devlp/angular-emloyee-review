import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  // editId: number = 0;
  employeeToEdit: any;

  url: string = 'http://localhost:3000/admin/';

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<any> {
    return this.http.get(this.url);
  }

  addEmployee(employee): Observable<any> {
    return this.http.post(this.url, employee, httpOptions);
  }

  deleteEmployee(id): Observable<any> {
    return this.http.delete(this.url + id);
  }

  editEmployee(id, employee): Observable<any> {
    return this.http.put(this.url + id, employee, httpOptions);
  }
  addReview(id, data): Observable<any> {
    return;
  }
  setEditId(employee) {
    this.employeeToEdit = employee;
  }
  getEditID() {
    return this.employeeToEdit;
  }
}
