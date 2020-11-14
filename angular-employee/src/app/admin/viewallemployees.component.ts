import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminService } from './admin.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './viewallemployees.component.html',
  styleUrls: ['./viewallemployees.component.css'],
})
export class ViewAllEmployees implements OnInit {
  employees: any = [];
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.adminService.getAllEmployees().subscribe(
      (res) => {
        console.log(res);
        this.employees = res.obj;
        this.employees.map((employee) => {
          (employee.reviewFormExpanded = false),
            (employee.reviewbymeexist = false);
        });
        console.log(this.employees);
      },
      (err) => console.log(err)
    );
  }

  onAddReview(id) {
    this.employees.map((employee) => {
      if (employee.id === id)
        employee.reviewFormExpanded = !employee.reviewFormExpanded;
    });
  }

  onDelete(id) {
    this.adminService.deleteEmployee(id).subscribe((res) => {
      this.employees = this.employees.filter(
        (employee) => employee.id != res.id
      );
    });
  }

  onEdit(employee) {
    this.adminService.setEditId(employee);
    this.router.navigateByUrl('/admin/newemployee');
  }
}
