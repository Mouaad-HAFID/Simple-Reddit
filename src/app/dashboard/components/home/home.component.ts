import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/Models/post.model';
import { Subreddit } from 'src/app/Models/subreddit.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() posts?: Post[];
  @Input() subreddits?: Subreddit[];
  constructor() {}

  ngOnInit(): void {}
}
