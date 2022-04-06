import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/Models/post.model';
import { Subreddit } from 'src/app/Models/subreddit.model';
import { PostsService } from 'src/app/services/posts.service';
import { SubredditsService } from 'src/app/services/subreddits.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
})
export class HomeContainerComponent implements OnInit {
  subscription1?: Subscription;
  subscription2?: Subscription;
  posts?: Post[];
  subreddits?: Subreddit[];
  constructor(
    private _postsService: PostsService,
    private _subredditsService: SubredditsService
  ) {}

  ngOnInit(): void {
    this.subscription1 = this._postsService.getAllPosts().subscribe((res) => {
      this.posts = res;
    });
    this.subscription2 = this._subredditsService
      .getAllSubreddits()
      .subscribe((res) => (this.subreddits = res));
  }
  ngOnDestroy() {
    this.subscription1?.unsubscribe();
    this.subscription2?.unsubscribe();
  }
}
