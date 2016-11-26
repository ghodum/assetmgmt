import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AssetListComponent } from './asset-list/asset-list.component'

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'assets', component: AssetListComponent }
        ])
    ],
    exports: [ RouterModule ]
})
export class AssetRoutingModule {
}