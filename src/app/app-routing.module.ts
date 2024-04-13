import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {SigninComponent} from "./components/signin/signin.component";
import {SignupComponent} from "./components/signup/signup.component";
import {HomeComponent} from "./components/home/home.component";
import {authGuard} from "./guards/auth.guard";
import {PostsComponent} from "./components/posts/posts.component";
import {OffersComponent} from "./components/offers/offers.component";
import {DemandsComponent} from "./components/demands/demands.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {artistGuard} from "./guards/artist.guard";

const routes: Routes = [
  {path:"", redirectTo:"welcome", pathMatch:"full"},
  {path:"welcome", component: WelcomeComponent},
  {path:"signin", component: SigninComponent},
  {path:"signup", component: SignupComponent},
  {path:"home", component: HomeComponent, canActivate:[authGuard],
    children: [
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
      { path: 'posts', component: PostsComponent },
      { path: 'offers', component: OffersComponent },
      { path: 'demands', component: DemandsComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate:[artistGuard]}
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
