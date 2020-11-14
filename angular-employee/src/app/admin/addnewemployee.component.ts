import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from './admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-employee',
  templateUrl: './addnewemployee.component.html',
  styleUrls: ['./addnewemployee.component.css'],
})
export class AddNewEmployeeComponent implements OnInit {
  // editId: number;
  employeeToEdit: any;

  myForm: FormGroup;
  constructor(private adminservice: AdminService, private router: Router) {}

  ngOnInit() {
    this.employeeToEdit = this.adminservice.getEditID();

    this.myForm = new FormGroup({
      email: new FormControl(
        this.employeeToEdit ? this.employeeToEdit.email : null,
        [
          Validators.required,
          Validators.pattern(
            "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
          ),
        ]
      ),
      firstname: new FormControl(
        this.employeeToEdit ? this.employeeToEdit.firstname : null,
        Validators.required
      ),
      lastname: new FormControl(
        this.employeeToEdit ? this.employeeToEdit.lastname : null,
        Validators.required
      ),
      hiredate: new FormControl(
        this.employeeToEdit
          ? (this.employeeToEdit.hire_date = new Date()
              .toISOString()
              .substring(0, 10))
          : null,
        Validators.required
      ),
      password: new FormControl(null, Validators.required),
      isadmin: new FormControl(
        this.employeeToEdit ? this.employeeToEdit.isadmin : 'false',
        Validators.required
      ),
    });
  }
  ngOnDestroy() {
    console.log('destroy');
    this.adminservice.setEditId(undefined);
  }

  onSubmit() {
    const employee = {
      firstname: this.myForm.value.firstname,
      lastname: this.myForm.value.lastname,
      hiredate: this.myForm.value.hiredate,
      email: this.myForm.value.email,
      password: this.myForm.value.password,
      isadmin: this.myForm.value.isadmin,
    };
    this.adminservice.addEmployee(employee).subscribe(
      (data) => {
        console.log(data);
        this.router.navigateByUrl('/admin/employees');
        console.log('route');
      },
      (error) => console.log(JSON.stringify(error))
    );
    this.myForm.reset;
  }
}
