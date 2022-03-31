import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { PostComponent } from './components/post/post.component';
import { PostContainerComponent } from './containers/post-container/post-container.component';
import { DashboardTileComponent } from './components/dashboard-tile/dashboard-tile.component';
import { PostsService } from '../services/posts.service';
import { SubredditsService } from '../services/subreddits.service';
import { CreateSubredditComponent } from './components/create-subreddit/create-subreddit.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { CreateSubredditContainerComponent } from './containers/create-subreddit-container/create-subreddit-container.component';
import { CreatePostContainerComponent } from './containers/create-post-container/create-post-container.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    HomeContainerComponent,
    PostComponent,
    PostContainerComponent,
    DashboardTileComponent,
    CreateSubredditComponent,
    CreatePostComponent,
    CreateSubredditContainerComponent,
    CreatePostContainerComponent,
  ],
  imports: [CommonModule],
  providers: [PostsService, SubredditsService],
  exports: [HomeContainerComponent, NavbarComponent],
})
export class DashboardModule {}
