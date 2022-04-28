import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewPostService } from '../_services/new-post.service';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
  constructor(
    private userAuthService: UserAuthService,
    private newPostService: NewPostService
  ) {}

  ngOnInit(): void {}

  //decodedToken.sub = username
  decodedToken = this.userAuthService.getDecodedAccessToken(
    this.userAuthService.getToken()
  );

  newPost(userNewPost: NgForm, userName: string) {
    this.newPostService
      .newPost(userNewPost.value, userName)
      .subscribe((response: any) => {
        console.warn('result', response);
      });
  }
}
