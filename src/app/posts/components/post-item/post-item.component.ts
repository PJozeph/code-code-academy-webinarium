import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Employee } from 'src/app/cca-core/models/employee.model';
import { EmployeeService } from 'src/app/cca-core/services/employee.service';
import { Post } from '../../model/post.model';

@Component({
    selector: 'app-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements  OnInit {
    @Input() post: Post = {} as Post;

    employee$: Observable<Employee> | undefined;
    constructor(private employeeService: EmployeeService) {}

    ngOnInit(): void {
      this.employee$ = this.employeeService.getEmployeeById(this.post.userId?.toString());
    }

}
