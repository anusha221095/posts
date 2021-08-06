import { Injectable,EventEmitter } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  listChangedEvent: EventEmitter<Post[]> = new EventEmitter();

  listOfPosts: Post[] = [
    // new Post(
    //   'Nature',
    //   'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, qui. Odit est, facilis in quo obcaecati commodi recusandae magnam iusto, aliquid at ut. Culpa tenetur rem labore perferendis earum saepe.',
    //   'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg',
    //   'me@me1.com',
    //   new Date(),
    //   1
    // ),
    // new Post(
    //   'Hampi',
    //   'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, qui. Odit est, facilis in quo obcaecati commodi recusandae magnam iusto, aliquid at ut. Culpa tenetur rem labore perferendis earum saepe.',
    //   'https://image.shutterstock.com/image-photo/famous-stone-chariot-monument-hampi-260nw-1509720656.jpg',
    //   'me@me1.com',
    //   new Date(),
    //   3
    // ),
    // new Post(
    //   'Eifill tower',
    //   'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, qui. Odit est, facilis in quo obcaecati commodi recusandae magnam iusto, aliquid at ut. Culpa tenetur rem labore perferendis earum saepe.',
    //   'https://i.pinimg.com/originals/0a/ee/68/0aee68e5e233cad0c948e3789d08f085.jpg',
    //   'me@me1.com',
    //   new Date(),
    //   5
    // )
  ]

  constructor() { }
  getPosts() {
    return this.listOfPosts;
  }

  deletePost(index: number) {
    this.listOfPosts.splice(index, 1)
  }

  addPost(post: Post) {
    this.listOfPosts.push(post);
  }

  updatePost(index: number, post: Post) {
    this.listOfPosts[index] = post;
  }

  getPost(index: number) {
    return this.listOfPosts[index];
  }

  likePost(index: number) {
    this.listOfPosts[index].numberOfLikes += 1;
  }

  setPosts(lisOfPosts:Post[]) {
    this.listOfPosts = lisOfPosts;
    this.listChangedEvent.emit(lisOfPosts);
  }
}
