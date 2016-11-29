import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { CommonService } from '../common/common.service';
import { Asset } from './asset';

@Injectable()
export class AssetService {
  private _assetsLocalUrl = 'api/assets.json';
  private _assetsRemoteUrl = 'http://0.0.0.0:3000/api/Assets';
  private _assetLocalUrl = 'api/asset.json';
  private _assetRemoteUrl = 'http://0.0.0.0:3000/api/Assets/';
  private _assetCountLocalUrl = 'api/asset_count.json';
  private _assetCountRemoteUrl = 'http://0.0.0.0:3000/api/Assets/count';

  constructor(private _http: Http,
              private _commonService: CommonService) {
  }

  getAssets(): Observable<Asset[]> {
    return this._http.get(this.getAssetsUrl())
          .map((response: Response) => <Asset[]>response.json())
          .do(data => console.log(`All: ${JSON.stringify(data)}`))
          .catch(this.handleError);
  }

  getAsset(id: number): Observable<Asset> {
    return this._http.get(this.getAssetUrl(id))
          .map((response: Response) => <Asset>response.json())
          .do(data => console.log(`All: ${JSON.stringify(data)}`))
          .catch(this.handleError);
  }

  addAsset(asset: Asset): Observable<Asset> {
    return this._http.post(this.getAssetsUrl(), asset)
          .map((response: Response) => <Asset>response.json())
          .do(data => console.log(`All: ${JSON.stringify(data)}`))
          .catch(this.handleError);
  }

  saveAsset(asset: Asset): Observable<Asset> {
    return this._http.put(this.getAssetUrl(asset.id), asset)
          .map((response: Response) => <Asset>response.json())
          .do(data => console.log(`All: ${JSON.stringify(data)}`))
          .catch(this.handleError);
  }

  deleteAsset(asset: Asset): Observable<Response> {
    return this._http.delete(this.getAssetUrl(asset.id))
        .map((response: Response) => response.json())
        .do(data => console.log(`All: ${JSON.stringify(data)}`))
        .catch(this.handleError);
  }

  countAssets(): Observable<number> {
    return this._http.get(this.getAssetCountUrl())
        .map((response: Response) => response.json().count)
        .do(data => console.log(`All: ${JSON.stringify(data)}`))
        .catch(this.handleError);
  }

  patchAsset(id: number, assetData: any): Observable<Asset> {
    return this._http.patch(this.getAssetUrl(id), assetData)
        .map((response: Response) => response.json())
        .do(data => console.log(`All: ${JSON.stringify(data)}`))
        .catch(this.handleError);
  }

  unassignedAssets(): Observable<Asset[]> {
    return this._http.get(`${this.getAssetsUrl()}?filter={"where":{"employeeId":null}}`)
        .map((response: Response) => response.json())
        .do(data => console.log(`All: ${JSON.stringify(data)}`))
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error.message || 'Server error');
  }

  private getAssetsUrl() :string {
    return this._commonService.isRemote() ? this._assetsRemoteUrl : this._assetsLocalUrl; 
  }

  private getAssetUrl(id: number) :string {
    return this._commonService.isRemote() ? this._assetRemoteUrl + id : this._assetLocalUrl; 
  }

  private getAssetCountUrl() :string {
    return this._commonService.isRemote() ? this._assetCountRemoteUrl : this._assetCountLocalUrl; 
  }
}
