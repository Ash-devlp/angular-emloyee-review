import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employeeid: number;
  constructor() {}

  ngOnInit(): void {
    this.employeeid = Number(localStorage.getItem('userId'));
  }
}
