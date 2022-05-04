import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewPostService } from '../_services/new-post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css'],
})
export class UpdatePostComponent implements OnInit {
  postId: number;
  postDetails = {
    content: String,
    hyperlink: String,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private post: NewPostService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.params['postId'];
    this.getPost();
    console.log(this.postDetails);
  }

  updatePost(postId: number, updatedPost: NgForm) {
    this.post.updatePost(postId, updatedPost).subscribe((response: any) => {
      console.warn('result', response);
    });
    this.router.navigate(['/user']);
  }

  getPost() {
    this.post.getPost(this.postId).subscribe((response: any) => {
      this.postDetails = response;
      console.warn('result', response);
    });
  }
}
