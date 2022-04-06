import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './dashboard/components/create-post/create-post.component';
import { CreateSubredditComponent } from './dashboard/components/create-subreddit/create-subreddit.component';
import { PostDetailsComponent } from './dashboard/components/post-details/post-details.component';
import { HomeContainerComponent } from './dashboard/containers/home-container/home-container.component';
import { SubredditContainerComponent } from './dashboard/containers/subreddit-container/subreddit-container.component';

const routes: Routes = [
  { path: '', component: HomeContainerComponent },
  { path: 'subreddit/add', component: CreateSubredditComponent },
  { path: 'subreddit/:id', component: SubredditContainerComponent },
  { path: 'post/add', component: CreatePostComponent },
  { path: 'post/:id', component: PostDetailsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
