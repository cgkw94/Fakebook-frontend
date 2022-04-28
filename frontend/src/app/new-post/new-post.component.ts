import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  newPost(userNewPost: NgForm) {
    console.log(userNewPost.value);
  }
}
