import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/cca-core/models/employee.model';
import { EmployeeService } from 'src/app/cca-core/services/employee.service';

@Component({
    selector: 'app-employee-add',
    templateUrl: './employee-add.component.html',
    styleUrls: ['./employee-add.component.scss'],
})
export class EmployeeAddComponent {
    private formBuilder = inject(FormBuilder);
    private employeeService = inject(EmployeeService);
    private router = inject(Router);

    public employeeForm = this.formBuilder.nonNullable.group({
        id: [Math.floor(Math.random() * 1000).toString()],
        name: ['', Validators.required],
        imagePath: ['', Validators.required],
        salary: [0, Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required],
        bankAccount: ['', Validators.required],
    });

    public onSubmit() {
        const newEmployee: Employee = this.employeeForm.getRawValue();
        this.employeeService.addEmployee(newEmployee).subscribe(() => this.router.navigate(['employees']));
    }

    public backClick() {
        this.router.navigate(['employees']);
    }
}
