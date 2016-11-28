import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Employee } from '../employee';

@Component({
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee;

  constructor(private _route: ActivatedRoute,
              private _router: Router) {
  }

  ngOnInit() {
    this.employee = {
      id: 0,
      firstName: 'John',
      lastName: 'Doe'
    };
  }

  onSave(): void {
    this._router.navigate(['/employees']);
  }

  onCancel(): void {
    this._router.navigate(['/employees']);
  }
}
