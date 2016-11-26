import { Injectable } from '@angular/core';
import { Employee } from './employee'

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees(): Employee[] {
    return [{
      id: 1,
      firstName: 'George',
      lastName: 'Washington'
    },{
      id: 2,
      firstName: 'Thomas',
      lastName: 'Jefferson'
    }];
  }
}
