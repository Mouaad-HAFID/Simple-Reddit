import { Component, Input, OnInit } from '@angular/core';
import { Subreddit } from 'src/app/Models/subreddit.model';

@Component({
  selector: 'app-subreddit-list',
  templateUrl: './subreddit-list.component.html',
  styleUrls: ['./subreddit-list.component.css'],
})
export class SubredditListComponent implements OnInit {
  @Input() subreddits?: Subreddit[];
  constructor() {}

  ngOnInit(): void {
    console.log(this.subreddits);
  }
}
