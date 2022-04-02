import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './dashboard/components/create-post/create-post.component';
import { CreateSubredditComponent } from './dashboard/components/create-subreddit/create-subreddit.component';
import { HomeContainerComponent } from './dashboard/containers/home-container/home-container.component';

const routes: Routes = [
  { path: '', component: HomeContainerComponent },
  { path: 'subreddit/add', component: CreateSubredditComponent },
  { path: 'post/add', component: CreatePostComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
