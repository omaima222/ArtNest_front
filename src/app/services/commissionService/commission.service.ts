import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommissionResponseDto} from "../../dtos/CommissionResponseDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommissionService {

  private url = "http://localhost:8080/api/commission/";

  constructor(private httpClient: HttpClient){ }

  getMyDemands(client_id: number): Observable<Array<CommissionResponseDto>> {
    return this.httpClient.get<Array<CommissionResponseDto>>(this.url + 'client/' + client_id);
  }

}
