import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { Post } from 'src/app/Models/post.model';
import { Subreddit } from 'src/app/Models/subreddit.model';
import { SubredditsService } from 'src/app/services/subreddits.service';

@Component({
  selector: 'app-subreddit-container',
  templateUrl: './subreddit-container.component.html',
  styleUrls: ['./subreddit-container.component.css'],
})
export class SubredditContainerComponent implements OnInit, OnDestroy {
  subreddit?: Subreddit;
  posts?: Post[];
  subscription?: Subscription;
  constructor(
    private subredditService: SubredditsService,
    private route: ActivatedRoute
  ) {}
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.route.params
      .pipe(switchMap(({ id }) => this.subredditService.getSubreddit(id)))
      .subscribe((res) => {
        this.subreddit = res;
        this.posts = this.subreddit.posts;
      });
  }
}
