import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../employees/employee.service';
import { AssetService } from '../../assets/asset.service';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ EmployeeService, AssetService ]
})
export class WelcomeComponent implements OnInit {
  employeeCount: number = -1;
  assetCount: number = -1;
  
  constructor(private _employeeService: EmployeeService,
              private _assetService: AssetService) {
  }

  ngOnInit() {
    this.getEmployeeCount();
    this.getAssetCount();
  }

  private getEmployeeCount(): void {
    this._employeeService.countEmployees().subscribe(
      employeeCount => this.employeeCount = employeeCount,
      error => console.log(<any>error)
    );
  }

  private getAssetCount(): void {
    this._assetService.countAssets().subscribe(
      assetCount => this.assetCount = assetCount,
      error => console.log(<any>error)
    );
  }
}
