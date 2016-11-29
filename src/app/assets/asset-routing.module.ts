import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AssetListComponent } from './asset-list/asset-list.component'
import { AssetDetailComponent } from './asset-detail/asset-detail.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'assets', component: AssetListComponent },
            { path: 'asset/:id', component: AssetDetailComponent },
        ])
    ],
    exports: [ RouterModule ]
})
export class AssetRoutingModule {
}