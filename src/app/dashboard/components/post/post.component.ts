import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/Models/post.model';
import { SubredditsService } from 'src/app/services/subreddits.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() post?: Post;
  subscription?: Subscription;
  subreddit: string = '';
  route: string = '';
  constructor() {}
  ngOnDestroy(): void {}

  ngOnInit(): void {
    console.log(this.post);
    this.route = `post/${this.post?.id}`;
    this.subreddit = `subreddit/${this.post?.subreddit?.id}`;
  }
}
