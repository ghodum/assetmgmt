import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component'
import { EmployeeViewComponent } from './employee-view/employee-view.component'
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component'

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'employees', component: EmployeeListComponent },
            { path: 'employee/:id', component: EmployeeViewComponent },
            { path: 'employee/edit/:id', component: EmployeeDetailComponent },
        ])
    ],
    exports: [ RouterModule ]
})
export class EmployeeRoutingModule {
}