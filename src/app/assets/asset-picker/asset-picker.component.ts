import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { Subscription } from 'rxjs/Subscription';

import { Asset } from '../../assets/asset';
import { AssetService } from '../../assets/asset.service';

@Component({
  templateUrl: './asset-picker.component.html',
  styleUrls: ['./asset-picker.component.css']
})
export class AssetPickerComponent implements OnInit {
  assets: Asset[] = [];
  errorMessage: string;
  employeeId: number = -1;
  private sub: Subscription;
  private _selectedAssetIds = [];

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _assetService: AssetService) {
  }

  ngOnInit(): void {
    this.sub = this._route.params.subscribe(
        params => {
            let id = +params['employeeId'];
            if (id > 0) {
              this.employeeId = id;
              this.loadUnassignedAssets();
            }
        }
    );
  }

  loadUnassignedAssets(): void {
    this._assetService.unassignedAssets().subscribe(
      assets => this.assets = assets,
      error => this.errorMessage = <any>error
    );
  }

  onSelectionChange(asset: Asset): void {
    let index = this._selectedAssetIds.indexOf(asset.id);

    if (index > -1) {
      this._selectedAssetIds.splice(index, 1);
    } else {
      this._selectedAssetIds.push(asset.id);
    } 
  }

  onAddAssets(): void {
    if (this._selectedAssetIds.length > 0) {
      let operations = [];

      this._selectedAssetIds.forEach(
        id => {
          operations.push(this._assetService.patchAsset(id, { employeeId: this.employeeId}))
        }
      );

      Observable.forkJoin(operations).subscribe(
        results => this.onCancel(),
        error => this.errorMessage = <any>error
      );
    } else {
      this.onCancel();
    }
  }

  onCancel(): void {
    this._router.navigate(['/employee/', this.employeeId]);
  }
}
