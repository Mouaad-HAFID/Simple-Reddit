import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { PostComponent } from './components/post/post.component';
import { DashboardTileComponent } from './components/dashboard-tile/dashboard-tile.component';
import { PostsService } from '../services/posts.service';
import { SubredditsService } from '../services/subreddits.service';
import { CreateSubredditComponent } from './components/create-subreddit/create-subreddit.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { SubredditComponent } from './components/subreddit/subreddit.component';
import { SubredditContainerComponent } from './containers/subreddit-container/subreddit-container.component';
import { SubredditListComponent } from './components/subreddit-list/subreddit-list.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    HomeContainerComponent,
    PostComponent,
    DashboardTileComponent,
    CreateSubredditComponent,
    CreatePostComponent,
    PostDetailsComponent,
    SubredditComponent,
    SubredditContainerComponent,
    SubredditListComponent,
  ],
  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule],
  providers: [PostsService, SubredditsService],
  exports: [HomeContainerComponent, NavbarComponent],
})
export class DashboardModule {}
