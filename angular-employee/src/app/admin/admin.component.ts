import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminService } from './admin.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  employees = [];
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {}

  onDelete(id) {
    this.adminService.deleteEmployee(id).subscribe((res) => {
      this.employees = this.employees.filter(
        (employee) => employee.id != res.id
      );
    });
  }

  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigateByUrl('/');
  }
}
