import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Employee } from './employee'

@Injectable()
export class EmployeeService {
  private _employeeUrl = 'api/employees.json';

  constructor(private _http: Http) {
  }

  getEmployees(): Observable<Employee[]> {
    return this._http.get(this._employeeUrl)
           .map((response: Response) => <Employee[]>response.json())
           .do(data => console.log(`All: ${JSON.stringify(data)}`))
           .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
