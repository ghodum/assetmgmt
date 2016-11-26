import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component'

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'employees', component: EmployeeListComponent }
        ])
    ],
    exports: [ RouterModule ]
})
export class EmployeeRoutingModule {
}