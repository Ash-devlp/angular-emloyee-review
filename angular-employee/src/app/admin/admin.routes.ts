import { Routes } from '@angular/router';

import { ViewAllEmployees } from './viewallemployees.component';
import { AddNewEmployeeComponent } from './addnewemployee.component';

export const ADMIN_ROUTES: Routes = [
  { path: 'employees', component: ViewAllEmployees },
  { path: 'newemployee', component: AddNewEmployeeComponent },

  { path: '', redirectTo: 'employees', pathMatch: 'full' },
];
