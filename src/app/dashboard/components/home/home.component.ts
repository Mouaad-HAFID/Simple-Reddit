import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/Models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() posts?: Post[];
  constructor() {}

  ngOnInit(): void {}
}
