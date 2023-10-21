import { Component, inject, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subscription, switchMap } from 'rxjs';
import { Employee } from 'src/app/cca-core/models/employee.model';
import { EmployeeService } from 'src/app/cca-core/services/employee.service';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnDestroy {
    private employeeService = inject(EmployeeService);
    private router = inject(Router);
    private subscription: Subscription = new Subscription();

    employees$: Observable<Employee[]> = this.employeeService.getEmployees();

    public handleSearchEvent(event: any) {
        const sub: Subscription = this.employeeService.searchByName(event.detail.value).subscribe(employees => {
            this.employees$ = of(employees);
        });
        this.subscription.add(sub);
    }

    ionViewWillEnter(): void {
        this.employees$ = this.employeeService.getEmployees();
    }

    public onDetailsClick(employeeId: string) {
        this.router.navigate(['employees', employeeId]);
    }

    public addEmployeeClick() {
        this.router.navigate(['employees/add']);
    }

    public onDeleteClick(id: string) {
        this.employees$ = this.employeeService.deleteEmployee(id).pipe(switchMap(() => this.employeeService.getEmployees()));
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
