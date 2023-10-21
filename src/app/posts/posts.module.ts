import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PaymentsRoutingModule } from './posts-routing.module';
import { PostService } from './services/post.service';

@NgModule({
    declarations: [PostListComponent, PostItemComponent],
    imports: [CommonModule, PaymentsRoutingModule, IonicModule, HttpClientModule],
    providers: [PostService],
})
export class PostsModule {}
