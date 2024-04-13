import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {provideHttpClient, withFetch, withInterceptors} from "@angular/common/http";
import {jwtInterceptor} from "./interceptors/jwt.interceptor";
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsComponent } from './components/posts/posts.component';
import { OffersComponent } from './components/offers/offers.component';
import { DemandsComponent } from './components/demands/demands.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import {firebaseConfig} from "./config/env";
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    HeaderComponent,
    PostsComponent,
    OffersComponent,
    DemandsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptors([jwtInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
