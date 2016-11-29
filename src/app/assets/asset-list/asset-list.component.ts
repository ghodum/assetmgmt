import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Asset } from '../asset';
import { AssetService } from '../asset.service';

@Component({
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {
  assets: Asset[] = [];
  errorMessage: string;

  constructor(private _assetService: AssetService,
              private _router: Router) { 
  }

  ngOnInit() {
    this._refreshAssets();
  }
    
  addAsset(): void {
    this._router.navigate(['/asset/0']);
  }

  onDeleteClick(asset: Asset): void {
    let resp = confirm('Are you sure you want to delete the selected Asset?');

    if (resp) {
      this._assetService.deleteAsset(asset).subscribe(
        response => this._refreshAssets(),
        err => this.errorMessage = <any>err
      );
    } 
  }

  private _refreshAssets(): void {
    this._assetService.getAssets()
      .subscribe(assets => this.assets = assets,
                 error => this.errorMessage = <any>error);
  }
}
