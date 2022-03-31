import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/Models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.css'],
})
export class PostContainerComponent implements OnInit, OnDestroy {
  @Input() post?: Post;
  constructor(private _postsService: PostsService) {}

  ngOnInit(): void {}
  ngOnDestroy() {}
}
