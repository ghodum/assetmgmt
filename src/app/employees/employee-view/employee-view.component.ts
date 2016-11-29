import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { Asset } from '../../assets/asset';
import { AssetService } from '../../assets/asset.service';

@Component({
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  employee: Employee = {
    id: null,
    firstName: null,
    lastName: null
  };
  employeeAssets: Asset[] = [];
  errorMessage: string;
  private sub: Subscription;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _employeeService: EmployeeService,
              private _assetService: AssetService) {
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
        employee => {
          this.employee = employee;
          this.getEmployeeAssets(employee.id);
        },
        error => this.errorMessage = <any>error);
  }

  getEmployeeAssets(id: number) {
    this._employeeService.getEmployeeAssets(id).subscribe(
        employeeAssets => this.employeeAssets = employeeAssets,
        error => this.errorMessage = <any>error
    );
  }

  onAssetDeleteClick(asset: Asset): void {
    let resp = confirm('Are you sure you want to remove the selected Asset from this Employee?');

    if (resp) {
      this._assetService.patchAsset(asset.id, { employeeId: null }).subscribe(
        asset => this.getEmployeeAssets(this.employee.id),
        error => this.errorMessage = <any>error
      );
    }
  }

  onAddAsset(): void {
    this._router.navigate(['/assets/picker/', this.employee.id]);
  }

  onEdit(): void {
    this._router.navigate(['/employee/edit/', this.employee.id]);
  }

  onCancel(): void {
    this._router.navigate(['/employees']);
  }
}
