import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { NewPostService } from '../_services/new-post.service';
import { UserAuthService } from '../_services/user-auth.service';
import { Observable } from 'rxjs';
import { UploadFileService } from '../_services/upload-file.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;

  constructor(
    private userAuthService: UserAuthService,
    private newPostService: NewPostService,
    private uploadFileService: UploadFileService
  ) {}

  ngOnInit(): void {
    this.fileInfos = this.uploadFileService.getFiles();
  }

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

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(userNewPost: NgForm, userName): void {
    this.progress = 0;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.uploadFileService
          .upload(
            this.currentFile,
            userNewPost.value.content,
            userNewPost.value.content.hyperlink,
            userName
          )
          .subscribe(
            (event: any) => {
              if (event.type === HttpEventType.UploadProgress) {
                this.progress = Math.round((100 * event.loaded) / event.total);
              } else if (event instanceof HttpResponse) {
                this.message = event.body.message;
                this.fileInfos = this.uploadFileService.getFiles();
              }
            },
            (err: any) => {
              console.log(err);
              this.progress = 0;
              if (err.error && err.error.message) {
                this.message = err.error.message;
              } else {
                this.message = 'Could not upload the file!';
              }
              this.currentFile = undefined;
            }
          );
      }
      this.selectedFiles = undefined;
    }
  }
}
