import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, Observable } from 'rxjs';
import { Employee } from 'src/app/cca-core/models/employee.model';
import { EmployeeService } from 'src/app/cca-core/services/employee.service';

@Component({
    selector: 'app-employee-details',
    templateUrl: './employee-details.component.html',
    styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent {
    private activatedRoute = inject(ActivatedRoute);
    private employeeService = inject(EmployeeService);
    private router = inject(Router);

    public employee$: Observable<Employee | undefined> = this.activatedRoute.params.pipe(
        mergeMap(params => this.employeeService.getEmployeeById(String(params['id'])))
    );

    public onEditClick(employeeId: string) {
        this.router.navigate(['employees','edit', employeeId]);
    }

    public employeesClick() {
        this.router.navigate(['employees']);
    }

    public backClick() {
        this.router.navigate(['employees']);
    }

}
