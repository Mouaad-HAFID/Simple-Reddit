import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { Post } from 'src/app/Models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  post?: Post;
  subscription?: Subscription;
  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {}
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.route.params
      .pipe(switchMap(({ id }) => this.postService.getPost(id)))
      .subscribe((res) => (this.post = res));
  }
}
