import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
    private _isRemote = true;

    isRemote(): boolean {
        return this._isRemote;
    }
}