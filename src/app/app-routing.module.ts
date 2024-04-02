import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {SigninComponent} from "./components/signin/signin.component";
import {SignupComponent} from "./components/signup/signup.component";
import {HomeComponent} from "./components/home/home.component";
import {authGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path:"", redirectTo:"welcome", pathMatch:"full"},
  {path:"welcome", component: WelcomeComponent},
  {path:"signin", component: SigninComponent},
  {path:"signup", component: SignupComponent},
  {path:"home", component: HomeComponent, canActivate:[authGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
