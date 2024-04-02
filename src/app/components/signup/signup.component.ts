import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/authService/auth.service";
import {Router} from "@angular/router";
import {SignupDto} from "../../dtos/SignupDto";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: '../../style/main.css'
})
export class SignupComponent {
  signupForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private authService: AuthService, private router: Router) {
    this.signupForm = this.formBuilder.group({
      firstName:['', [Validators.required]],
      lastName:['', [Validators.required]],
      username:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit(): void{
    this.submitted = true;
    if(this.signupForm.valid){
      const registerDto: SignupDto = {
        firstName : this.signupForm.value.firstName,
        lastName : this.signupForm.value.lastName,
        username : this.signupForm.value.username,
        email : this.signupForm.value.email,
        password : this.signupForm.value.password,
        role : this.authService.getRole(),
      }
      this.authService.signUp(registerDto).subscribe(
        () => {
          this.router.navigate(["signin"])
        },
        (error) => {
          console.error('Registration error:', error);
        }
      );
      this.signupForm.reset();
      this.submitted = false;
    }
  }
}
