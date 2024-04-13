import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/authService/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: '../../style/main.css'
})
export class HeaderComponent implements OnInit{

  artist:Boolean=false;
  role:string|null=null;

  constructor(private authService: AuthService,  private route: Router) {}

  ngOnInit(): void {
    this.role = this.authService.getRole();
    if(this.role=="ROLE_ARTIST") this.artist=true;
  }

  logout(){
    this.authService.removeToken();
    this.route.navigate(["home"])
  }
}
