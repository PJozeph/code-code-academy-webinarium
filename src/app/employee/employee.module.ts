import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { IonicModule } from '@ionic/angular';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';

@NgModule({
    imports: [CommonModule, EmployeeRoutingModule, IonicModule, RouterModule, ReactiveFormsModule],
    declarations: [EmployeeListComponent, EmployeeDetailsComponent, EmployeeEditComponent, EmployeeAddComponent],
})
export class EmployeeModule {}
