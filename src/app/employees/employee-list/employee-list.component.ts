import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee'
import { EmployeeService } from '../employee.service';

@Component({
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [ EmployeeService ]
})
export class EmployeeListComponent implements OnInit {
  errorMessages: String;
  employees: Employee[] = [];  

  constructor(private _employeeService: EmployeeService ) {
   }

  ngOnInit() {
    this._employeeService.getEmployees()
      .subscribe(employees => this.employees = employees,
                 error => this.errorMessages = <any>error);
  }
}
