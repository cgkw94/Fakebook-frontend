import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NewPostService } from '../_services/new-post.service';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  @Input() postData = {
    id: 0,
    content: '',
    hyperlink: '',
    file_path: '',
    viewCount: 0,
  };
  @Input() userData = { userName: '', userFirstName: '' };

  userRole: string;

  baseUrl = 'http://localhost:8082/files/';

  constructor(
    private userAuthService: UserAuthService,
    private postService: NewPostService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addViewCount();
    this.userRole = this.userAuthService.getRoles();
  }

  decodedToken = this.userAuthService.getDecodedAccessToken(
    this.userAuthService.getToken()
  );

  deletePost(userName: string) {
    this.postService
      .deletePost(userName, this.postData.id)
      .subscribe((data: any) => {
        console.log('deleted');
      });
    window.location.reload();
  }

  addViewCount() {
    this.postService.addViewCount(this.postData.id).subscribe((data: any) => {
      console.log('added view');
    });
  }

  editPostRoute() {
    this.router.navigate([`/updatepost/${this.postData.id}`]);
  }
}
