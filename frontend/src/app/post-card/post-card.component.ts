import { Component, OnInit, Input } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent implements OnInit {
  @Input() postData = { id: 0, content: '', hyperlink: '' };
  @Input() userData = { userName: '', userFirstName: '' };

  renderDelete: boolean = false;

  constructor(private userAuthService: UserAuthService) {}

  ngOnInit(): void {}

  decodedToken = this.userAuthService.getDecodedAccessToken(
    this.userAuthService.getToken()
  );

  checkUserName() {
    if (this.decodedToken.sub === this.userData.userName) {
      this.renderDelete = true;
    } else {
      this.renderDelete = false;
    }
    // console.log(this.decodedToken.sub);
    console.log(this.userData.userName);
    console.log(this.renderDelete);
  }
}
