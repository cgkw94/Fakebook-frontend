import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  @Input() userData = {
    createdAt: String,
    userName: '',
    role: [{ roleName: '' }],
  };

  popoverTitle: string = 'Confirmation';
  popoverMessage: string = 'Do you really want to delete user ';
  cancelClicked: boolean = false;
  confirmClicked: boolean = true;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  deleteUser(userName: string) {
    this.userService.deleteUser(userName).subscribe((data) => {
      console.log(userName + 'deleted');
    });
    window.location.reload();
  }
}
