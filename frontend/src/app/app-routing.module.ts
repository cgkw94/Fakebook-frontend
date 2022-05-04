import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { NewPostComponent } from './new-post/new-post.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { AuthGuard } from './_auth/auth.guard';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'admin',
    component: AdminHomepageComponent,
    canActivate: [AuthGuard],
    data: { role: 'Admin' },
  },
  {
    path: 'user',
    component: UserHomepageComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'signup', component: SignUpComponent },
  {
    path: 'newpost',
    component: NewPostComponent,
  },
  {
    path: 'updatepost/:postId',
    component: UpdatePostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
