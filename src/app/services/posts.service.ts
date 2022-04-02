import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}
  getAllPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(
      'http://localhost:3000/posts?embed=subreddits'
    );
  }
  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>('http://localhost:3000/posts', post);
  }
}
