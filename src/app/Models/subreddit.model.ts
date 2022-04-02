import { Post } from './post.model';

export interface Subreddit {
  id?: number;
  name: string;
  description?: string;
  posts?: Post[];
}
