import { Injectable } from '@angular/core';

import { Asset } from './asset';

@Injectable()
export class AssetService {

  constructor() { }

  getAssets(): Asset[] {
    return [{
      id: 1,
      description: 'Macbook Pro',
      dateAcquired: '1/1/2016',
      purchasePrice: 2000.00,
      serialNumber: '12345'
    },{
      id: 2,
      description: 'Macbook Pro',
      dateAcquired: '6/23/2016',
      purchasePrice: 2500.00,
      serialNumber: '90120'
    },{
      id: 3,
      description: 'Mouse',
      dateAcquired: '9/1/2016',
      purchasePrice: 15.00,
      serialNumber: 'M123'
    }];
  }
}
