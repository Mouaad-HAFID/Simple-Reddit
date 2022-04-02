import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subreddit } from '../Models/subreddit.model';

@Injectable({
  providedIn: 'root',
})
export class SubredditsService {
  constructor(private http: HttpClient) {}
  getAllSubreddits(): Observable<Array<Subreddit>> {
    return this.http.get<Array<Subreddit>>(
      'http://localhost:3000/subreddits?_embed=posts'
    );
  }
  createSubreddit(subreddit: Subreddit): Observable<Subreddit> {
    return this.http.post<Subreddit>(
      'http://localhost:3000/subreddits',
      subreddit
    );
  }
}
