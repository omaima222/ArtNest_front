import { Component } from '@angular/core';
import {AuthService} from "../../services/authService/auth.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: '../../style/main.css'
})
export class WelcomeComponent {

  constructor(private authService: AuthService) {}

  setRole(role: string){
     this.authService.setRole(role)
  }

}
