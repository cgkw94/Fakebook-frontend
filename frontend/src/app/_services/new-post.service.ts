import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewPostService {
  PATH_OF_API = 'http://localhost:8082';

  constructor(private httpclient: HttpClient) {}

  public newPost(userNewPost: any, userName: string) {
    return this.httpclient.post(
      `${this.PATH_OF_API}/user/${userName}/posts`,
      userNewPost,
      {
        responseType: 'text',
      }
    );
  }

  public getAllPost(page: number, size: number) {
    return this.httpclient.get(
      `${this.PATH_OF_API}/allpost?page=${page}&size=${size}&sort=createdAt,desc`
    );
  }

  public getPost(postId: number) {
    return this.httpclient.get(`${this.PATH_OF_API}/posts/${postId}`);
  }

  public deletePost(userName: string, postId: number) {
    return this.httpclient.delete(
      `${this.PATH_OF_API}/user/${userName}/posts/${postId}`
    );
  }

  public addViewCount(postId: number) {
    return this.httpclient.get(
      `${this.PATH_OF_API}/posts/${postId}/updateViewCount`
    );
  }

  public updatePost(postId: number, updatedPost: any) {
    return this.httpclient.put(
      `${this.PATH_OF_API}/posts/${postId}`,
      updatedPost
    );
  }
}
