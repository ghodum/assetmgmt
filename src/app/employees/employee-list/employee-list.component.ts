import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee'
import { EmployeeService } from '../employee.service';

@Component({
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [ EmployeeService ]
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];  

  constructor(private _employeeService: EmployeeService ) {
   }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }
}
