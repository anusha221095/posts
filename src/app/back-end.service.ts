import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
//dataBase Path:https://live-posts-4251e-default-rtdb.firebaseio.com/
export class BackEndService {

  constructor(private postService: PostService, private httpClient: HttpClient) { }

  saveData() {
    //fun 1- Save
    const listOfPosts: Post[] = this.postService.getPosts();
    //fun 2-send list of posts
    this.httpClient.put('https://live-posts-4251e-default-rtdb.firebaseio.com/posts.json', listOfPosts).subscribe((res: any) => {
      console.log(res);
    })
  }

  fetchData() {
    //get posts from backend
    this.httpClient
      .get<Post[]>('https://live-posts-4251e-default-rtdb.firebaseio.com/posts.json')
      .pipe(
        tap((listOfPosts: Post[]) => {
          console.log(listOfPosts);

        //sending list to post service
          this.postService.setPosts(listOfPosts)
        })
      ).subscribe()
  }
}
