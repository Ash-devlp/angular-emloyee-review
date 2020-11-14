import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddNewEmployeeComponent } from './admin/addnewemployee.component';
import { ViewAllEmployees } from './admin/viewallemployees.component';

import { AuthService } from './login/auth.service';
import { EmployeeService } from './employee/employee.service';
import { AdminService } from './admin/admin.service';
import { NewReviewComponent } from './review/new-review/new-review.component';
import { ViewReviewComponent } from './review/view-review/view-review.component';
import { NeucircleComponent } from './ui/neucircle/neucircle.component';
import { AddReviewerComponent } from './review/add-reviewer/add-reviewer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    EmployeeComponent,
    AddNewEmployeeComponent,
    ViewAllEmployees,
    NewReviewComponent,
    ViewReviewComponent,
    NeucircleComponent,
    AddReviewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService, AdminService, EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
