import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Subreddit } from 'src/app/Models/subreddit.model';
import { PostsService } from 'src/app/services/posts.service';
import { SubredditsService } from 'src/app/services/subreddits.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit, OnDestroy {
  subreddits?: Subreddit[];
  subscription?: Subscription;
  createPostForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    content: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    subredditId: new FormControl('', Validators.required),
  });
  constructor(
    private subredditService: SubredditsService,
    private postsService: PostsService,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.subredditService
      .getAllSubreddits()
      .subscribe((res) => (this.subreddits = res));
  }
  showErrors(control: any) {
    const { dirty, touched, errors } = control;
    return dirty && touched && errors;
  }
  onSubmit() {
    if (this.createPostForm.valid) {
      this.postsService
        .createPost({
          title: this.createPostForm.value.title,
          content: this.createPostForm.value.content,
          subredditId: parseInt(this.createPostForm.value.subredditId),
        })
        .subscribe({
          complete: () => {
            this.createPostForm.reset();
            this.router.navigate(['']);
          },
        });
    }
  }
}
