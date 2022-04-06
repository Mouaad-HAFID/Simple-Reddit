import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/Models/post.model';
import { PostsService } from 'src/app/services/posts.service';
import { SubredditsService } from 'src/app/services/subreddits.service';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
})
export class HomeContainerComponent implements OnInit {
  subscription?: Subscription;
  posts?: Post[];
  constructor(private _postsService: PostsService) {}

  ngOnInit(): void {
    this.subscription = this._postsService.getAllPosts().subscribe((res) => {
      console.log(res);
      this.posts = res;
    });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
