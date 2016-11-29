import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { CommonService } from '../common/common.service';
import { Employee } from './employee'
import { Asset } from '../assets/asset'

@Injectable()
export class EmployeeService {
  private _employeesLocalUrl = 'api/employees.json';
  private _employeesRemoteUrl = 'http://0.0.0.0:3000/api/Employees';
  private _employeeLocalUrl = 'api/employee.json';
  private _employeeRemoteUrl = 'http://0.0.0.0:3000/api/Employees/';
  private _employeeCountLocalUrl = 'api/employee_count.json';
  private _employeeCountRemoteUrl = 'http://0.0.0.0:3000/api/Employees/count';
private time;
private num;

  constructor(private _http: Http,
              private _commonService: CommonService) {
      this.time = new Date().getTime();
      this.num = Math.floor(Math.random() * 1000)
  }

  getEmployees(): Observable<Employee[]> {
    return this._http.get(this.getEmployeesUrl())
          .map((response: Response) => <Employee[]>response.json())
          .do(data => console.log(`All: ${JSON.stringify(data)}`))
          .catch(this.handleError);
  }

  getEmployee(id: number): Observable<Employee> {
    return this._http.get(this.getEmployeeUrl(id))
          .map((response: Response) => <Employee>response.json())
          .do(data => console.log(`All: ${JSON.stringify(data)}`))
          .catch(this.handleError);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this._http.post(this.getEmployeesUrl(), employee)
          .map((response: Response) => <Employee>response.json())
          .do(data => console.log(`All: ${JSON.stringify(data)}`))
          .catch(this.handleError);
  }

  saveEmployee(employee: Employee): Observable<Employee> {
    return this._http.put(this.getEmployeeUrl(employee.id), employee)
          .map((response: Response) => <Employee>response.json())
          .do(data => console.log(`All: ${JSON.stringify(data)}`))
          .catch(this.handleError);
  }

  deleteEmployee(employee: Employee): Observable<Response> {
    return this._http.delete(this.getEmployeeUrl(employee.id))
        .map((response: Response) => response.json())
        .do(data => console.log(`All: ${JSON.stringify(data)}`))
        .catch(this.handleError);
  }

  countEmployees(): Observable<number> {
    return this._http.get(this.getEmployeeCountUrl())
        .map((response: Response) => response.json().count)
        .do(data => console.log(`All: ${JSON.stringify(data)}`))
        .catch(this.handleError);
  }

  getEmployeeAssets(id: number): Observable<Asset[]> {
    return this._http.get(`${this.getEmployeesUrl()}/${id}/assets`)
        .map((response: Response) => response.json())
        .do(data => console.log(`All: ${JSON.stringify(data)}`))
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error.message || 'Server error');
  }

  private getEmployeesUrl() :string {
    return this._commonService.isRemote() ? this._employeesRemoteUrl : this._employeesLocalUrl; 
  }

  private getEmployeeUrl(id: number) :string {
    return this._commonService.isRemote() ? this._employeeRemoteUrl + id : this._employeeLocalUrl; 
  }

  private getEmployeeCountUrl() :string {
    return this._commonService.isRemote() ? this._employeeCountRemoteUrl : this._employeeCountLocalUrl; 
  }
}
