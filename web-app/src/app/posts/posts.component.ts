import { Component, OnInit } from '@angular/core';
import {PostService} from "../services/post.service";
import { Post } from '../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    private PostService: PostService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.PostService.getHeroes()
      .subscribe(posts => {
        this.posts = posts;
        console.log(this.posts);
      });
  }
}
