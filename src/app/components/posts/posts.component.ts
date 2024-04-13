import {Component, OnInit} from '@angular/core';
import {PostResponseDto} from "../../dtos/PostResponseDto";
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../services/authService/auth.service";
import {PostService} from "../../services/postService/post.service";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: '../../style/main.css'
})
export class PostsComponent implements OnInit{
  posts: PostResponseDto[] = []

  constructor(private authService: AuthService, private postService : PostService, private route: Router) {}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(
      (data: PostResponseDto[]) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }
}
