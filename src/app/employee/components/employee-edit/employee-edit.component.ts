import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, Observable, Subscription, tap } from 'rxjs';
import { Employee } from 'src/app/cca-core/models/employee.model';
import { EmployeeService } from 'src/app/cca-core/services/employee.service';

@Component({
    selector: 'app-employee-edit',
    templateUrl: './employee-edit.component.html',
    styleUrls: ['./employee-edit.component.scss'],
})
export class EmployeeEditComponent implements OnDestroy {
    private formBuilder = inject(FormBuilder);
    private activatedRoute = inject(ActivatedRoute);
    private employeeService = inject(EmployeeService);
    private router = inject(Router);
    private subscriptions = new Subscription();

    public employee$: Observable<Employee> = this.activatedRoute.params.pipe(
        mergeMap(params => this.employeeService.getEmployeeById(String(params['id']))),
        tap(employee => this.employeeForm.setValue(employee))
    );

    public employeeForm = this.formBuilder.nonNullable.group({
        id: [''],
        name: [''],
        imagePath: [''],
        salary: [0],
        email: [''],
        phone: [''],
        bankAccount: [''],
    });

    public onSubmit() {
        const updateEmployee: Employee = this.employeeForm.getRawValue();
        const sub: Subscription = this.employeeService.updateEmployee(updateEmployee).subscribe(() => {
            this.router.navigate(['employees', updateEmployee.id]);
        });
        this.subscriptions.add(sub);
    }

    public onCancelClick(id: string) {
        this.router.navigate(['employees', id]);
    }

    public onDeleteClick(id: string) {
        const sub: Subscription = this.employeeService.deleteEmployee(id).subscribe(() => {
            this.router.navigate(['employees']);
        });
        this.subscriptions.add(sub);
    }

    public back(id: string): void {
        this.router.navigate(['employees', id]);
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
