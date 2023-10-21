import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../model/post.model';
import { PostService } from '../../services/post.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
    posts$: Observable<Post[]> = this.postService.getPosts();

    constructor(private postService: PostService) {}
}
