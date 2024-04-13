import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/authService/auth.service";
import {Router} from "@angular/router";
import { AngularFireStorage } from '@angular/fire/compat/storage';
import {PostRequestDto} from "../../dtos/PostRequestDto";
import {PostService} from "../../services/postService/post.service";
import {PostResponseDto} from "../../dtos/PostResponseDto";
import {CommissionResponseDto} from "../../dtos/CommissionResponseDto";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: '../../style/main.css'
})
export class DashboardComponent implements OnInit{
  myPosts: PostResponseDto[] = []
  postForm: FormGroup;
  submitted = false;
  showForm: boolean = false;
  user_id:number = Number(this.authService.getUserId());


  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private postService : PostService,
              private fireStorage:AngularFireStorage,
              private route: Router) {
    this.postForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.user_id = Number(this.authService.getUserId());
    this.postService.getAllMyPosts(this.user_id).subscribe(
      (data: PostResponseDto[]) => {
        this.myPosts = data;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;

    if (this.postForm.valid) {
      const fileInput = document.getElementById('file') as HTMLInputElement;
      const file = (fileInput.files as FileList)[0];

      if (!file) {
        console.error('No file selected');
        return;
      }

      try {
        const path = `application_files/${new Date().getTime()}_${file.name}`;
        const uploadTask = this.fireStorage.upload(path, file);
        const snapshot = await uploadTask;
        const downloadURL = await snapshot.ref.getDownloadURL();

        const postdto: PostRequestDto = {
          id: null,
          name: this.postForm.value.name,
          description: this.postForm.value.description,
          image: downloadURL,
          user_id: this.user_id
        };

        this.postService.addPost(postdto).subscribe(
          response => {
            console.log('Post added successfully:', response);
            this.postForm.reset();
            this.submitted = false;
          },
          error => {
            console.error('Error adding post:', error);
          }
        );

      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  }

}
