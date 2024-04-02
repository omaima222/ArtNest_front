import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/authService/auth.service";
import {SigninDto} from "../../dtos/SigninDto";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: '../../style/main.css'
})
export class SigninComponent {

  signinFrom: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private authService: AuthService, private route: Router) {
    this.signinFrom = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]]
    })
  }


  onSubmit(): void{
    this.submitted = true;
    if(this.signinFrom.valid){
      const signinDto: SigninDto = {
        email : this.signinFrom.value.email,
        password : this.signinFrom.value.password,
      }
      this.authService.signIn(signinDto).subscribe(
        (message: string) => {
          this.route.navigate(["home"])
        },
        (error) => {
          console.error('Registration error:', error);
        }
      );
      this.signinFrom.reset();
      this.submitted = false;
    }
  }
}
