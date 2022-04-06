import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Subreddit } from '../Models/subreddit.model';

@Injectable({
  providedIn: 'root',
})
export class SubredditsService {
  host = environment.baseUrl;
  constructor(private http: HttpClient) {}
  getAllSubreddits(): Observable<Array<Subreddit>> {
    return this.http.get<Array<Subreddit>>(
      `${this.host}/subreddits?_embed=posts`
    );
  }
  getSubreddit(id: any): Observable<Subreddit> {
    return this.http.get<Subreddit>(
      `${this.host}/Subreddits/${id}?_embed=posts`
    );
  }
  createSubreddit(subreddit: Subreddit): Observable<Subreddit> {
    return this.http.post<Subreddit>(`${this.host}/subreddits`, subreddit);
  }
}
