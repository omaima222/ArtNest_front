import {Component, OnInit} from '@angular/core';
import {CommissionService} from "../../services/commissionService/commission.service";
import {CommissionResponseDto} from "../../dtos/CommissionResponseDto";
import {AuthService} from "../../services/authService/auth.service";

@Component({
  selector: 'app-demands',
  templateUrl: './demands.component.html',
  styleUrl: '../../style/main.css'
})
export class DemandsComponent implements OnInit{

    myDemands:CommissionResponseDto[] = [];
    user_id:number|null = null;

    constructor(private commissionService : CommissionService, private authSerivce : AuthService) {
    }

    ngOnInit(): void {
      this.user_id = Number(this.authSerivce.getUserId());
      this.commissionService.getMyDemands(this.user_id).subscribe(
        (data: CommissionResponseDto[]) => {
          this.myDemands = data;
        },
        (error) => {
          console.error('Error fetching demands:', error);
        }
      );
    }
}
