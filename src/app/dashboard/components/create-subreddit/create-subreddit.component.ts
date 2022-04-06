import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Subreddit } from 'src/app/Models/subreddit.model';
import { SubredditsService } from 'src/app/services/subreddits.service';

@Component({
  selector: 'app-create-subreddit',
  templateUrl: './create-subreddit.component.html',
  styleUrls: ['./create-subreddit.component.css'],
})
export class CreateSubredditComponent implements OnInit, OnDestroy {
  subscription?: Subscription;
  subredditForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(
    private subredditsService: SubredditsService,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  showErrors(control: any) {
    const { dirty, touched, errors } = control;
    return dirty && touched && errors;
  }
  ngOnInit(): void {}
  onSubmit() {
    let subredditToAdd: Subreddit = {
      name: this.subredditForm.value.name,
      description: this.subredditForm.value.description,
    };
    console.log(subredditToAdd);
    this.subscription = this.subredditsService
      .createSubreddit(subredditToAdd)
      .subscribe({
        complete: () => {
          this.subredditForm.reset();
          this.router.navigate(['/']);
        },
      });
  }
}
