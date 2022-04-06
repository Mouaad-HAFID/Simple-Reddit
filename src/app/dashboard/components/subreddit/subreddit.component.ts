import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/Models/post.model';
import { Subreddit } from 'src/app/Models/subreddit.model';

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.css'],
})
export class SubredditComponent implements OnInit {
  @Input() posts?: Post[];
  @Input() subreddit?: Subreddit;
  constructor() {}

  ngOnInit(): void {}
}
