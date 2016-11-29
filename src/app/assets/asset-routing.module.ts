import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AssetListComponent } from './asset-list/asset-list.component'
import { AssetDetailComponent } from './asset-detail/asset-detail.component';
import { AssetPickerComponent } from './asset-picker/asset-picker.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'assets', component: AssetListComponent },
            { path: 'asset/:id', component: AssetDetailComponent },
            { path: 'assets/picker/:employeeId', component: AssetPickerComponent },
        ])
    ],
    exports: [ RouterModule ]
})
export class AssetRoutingModule {
}