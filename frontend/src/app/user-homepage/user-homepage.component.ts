import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewPostService } from '../_services/new-post.service';
import { UserAuthService } from '../_services/user-auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css'],
})
export class UserHomepageComponent implements OnInit {
  page: number = 0;
  itemsPerPage = 10;
  allPost: any;
  totalItems: any;
  userNameMatch: boolean = false;

  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    private postService: NewPostService,
    private httpclient: HttpClient
  ) {}

  ngOnInit(): void {
    this.getAllPost();
  }

  //decodedToken.sub = username
  decodedToken = this.userAuthService.getDecodedAccessToken(
    this.userAuthService.getToken()
  );

  getAllPost() {
    this.httpclient
      .get(
        `http://localhost:8082/allpost?page=${0}&size=${
          this.itemsPerPage
        }&sort=createdAt,desc`
      )
      .subscribe((data: any) => {
        this.allPost = data.content;
        this.totalItems = data.totalElements;
      });
  }
  //pagination
  gty(page: any) {
    this.httpclient
      .get(
        `http://localhost:8082/allpost?page=${page - 1}&size=${
          this.itemsPerPage
        }&sort=createdAt,desc`
      )
      .subscribe((data: any) => {
        this.allPost = data.content;
        this.totalItems = data.totalElements;
      });
  }
}
