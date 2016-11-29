import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from '../employee'
import { EmployeeService } from '../employee.service';

@Component({
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [ EmployeeService ]
})
export class EmployeeListComponent implements OnInit {
  errorMessage: String;
  employees: Employee[] = [];  

  constructor(private _employeeService: EmployeeService,
              private _router: Router) {
   }

  ngOnInit() {
      this._refreshEmployees();
  }

  addEmployee(): void {
    this._router.navigate(['/employee/0']);
  }

  onDeleteClick(employee: Employee): void {
    let resp = confirm('Are you sure you want to delete the selected Employee?');

    if (resp) {
      this._employeeService.deleteEmployee(employee).subscribe(
        response => this._refreshEmployees(),
        err => this.errorMessage = <any>err
      );
    } 
  }

  private _refreshEmployees(): void {
    this._employeeService.getEmployees()
      .subscribe(employees => this.employees = employees,
                 error => this.errorMessage = <any>error);
  }
}
