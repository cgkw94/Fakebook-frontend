import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  signUp(userSignUp: NgForm) {
    this.userService.signUp(userSignUp.value).subscribe((response: any) => {
      console.warn('result', response);
      this.router.navigate(['/login']);
    });
  }
}
