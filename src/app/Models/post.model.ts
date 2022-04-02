import { Subreddit } from './subreddit.model';

export interface Post {
  id?: number;
  title: string;
  content: string;
  subredditId: number;
  subreddit?: Subreddit;
}
