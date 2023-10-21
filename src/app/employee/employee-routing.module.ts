import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

const routes: Routes = [
    {
        path: '',
        component: EmployeeListComponent,
    },
    {
        path: 'add',
        component: EmployeeAddComponent,
    },
    {
        path: ':id',
        component: EmployeeDetailsComponent,
    },
    {
        path: 'edit/:id',
        component: EmployeeEditComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EmployeeRoutingModule {}
