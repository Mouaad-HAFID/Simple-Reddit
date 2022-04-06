import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../Models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  host = environment.baseUrl;
  constructor(private http: HttpClient) {}
  getAllPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(`${this.host}/posts?_expand=subreddit`);
  }
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.host}/posts/${id}?_expand=subreddit`);
  }
  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.host}/posts`, post);
  }
}
