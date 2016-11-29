import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription }       from 'rxjs/Subscription';

import { Asset } from '../asset';
import { AssetService } from '../asset.service';

@Component({
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css']
})
export class AssetDetailComponent implements OnInit {
  asset: Asset = {
    id: null,
    description: null,
    dateAcquired: null,
    purchasePrice: null,
    serialNumber: null
  };

  errorMessage: string;
  private sub: Subscription;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _assetService: AssetService) {
  }

  ngOnInit(): void {
    this.sub = this._route.params.subscribe(
        params => {
            let id = +params['id'];
            if (id > 0) {
              this.getAsset(id);
            }
        }
    );
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

  getAsset(id: number) {
    this._assetService.getAsset(id).subscribe(
        asset => this.asset = asset,
        error => this.errorMessage = <any>error);
  }

  onSave(): void {
    let serviceMethod = this.asset.id == null ? 
      'addAsset' : 'saveAsset';

    this._assetService[serviceMethod](this.asset).subscribe(
      asset => {
        this.asset = asset;
        this._router.navigate(['/assets']);
      },
      error => {
        this.errorMessage = <any>error;
      }
    );
  }

  onCancel(): void {
    this._router.navigate(['/assets']);
  }
}