import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  providers: [ EmployeeService ]
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee = {
    id: null,
    firstName: null,
    lastName: null
  };

  errorMessage: string;
  private sub: Subscription;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.sub = this._route.params.subscribe(
        params => {
            let id = +params['id'];
            if (id > 0) {
              this.getEmployee(id);
            }
        }
    );
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

  getEmployee(id: number) {
    this._employeeService.getEmployee(id).subscribe(
        employee => this.employee = employee,
        error => this.errorMessage = <any>error);
  }

  onSave(): void {
    let serviceMethod = this.employee.id == null ? 
      'addEmployee' : 'saveEmployee';

    this._employeeService[serviceMethod](this.employee).subscribe(
      employee => {
        this.employee = employee;
        this._router.navigate(['/employees']);
      },
      error => {
        this.errorMessage = <any>error;
      }
    );
  }

  onCancel(): void {
    this._router.navigate(['/employees']);
  }
}
