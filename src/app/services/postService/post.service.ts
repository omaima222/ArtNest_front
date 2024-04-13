import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OfferResponseDto} from "../../dtos/OfferResponseDto";
import {PostResponseDto} from "../../dtos/PostResponseDto";
import {PostRequestDto} from "../../dtos/PostRequestDto";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = "http://localhost:8080/api/post/";

  constructor(private httpClient: HttpClient){ }

  getAllPosts(): Observable<Array<PostResponseDto>> {
    return this.httpClient.get<Array<PostResponseDto>>(this.url);
  }

  getAllMyPosts(user_id:number): Observable<Array<PostResponseDto>> {
    return this.httpClient.get<Array<PostResponseDto>>(this.url+"artist/"+user_id);
  }

  addPost(post: PostRequestDto): Observable<any> {
    return this.httpClient.post(this.url, post);
  }
}
