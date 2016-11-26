import { Component, OnInit } from '@angular/core';

import { Asset } from '../asset';
import { AssetService } from '../asset.service';

@Component({
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css'],
  providers: [ AssetService ]
})
export class AssetListComponent implements OnInit {
  assets: Asset[] = [];

  constructor(private _assetService: AssetService) { }

  ngOnInit() {
    this.assets = this._assetService.getAssets();
  }
}
