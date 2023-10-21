import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { EmployeeService } from 'src/app/cca-core/services/employee.service';
import { Post } from '../../model/post.model';
import { PostService } from '../../services/post.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
    posts$: Observable<Post[]> = this.postService.getPosts().pipe(tap(foo => console.log(foo, 'foo')));

    constructor(private postService: PostService) {}
}
