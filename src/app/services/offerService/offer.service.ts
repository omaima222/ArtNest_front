import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommissionResponseDto} from "../../dtos/CommissionResponseDto";
import {OfferResponseDto} from "../../dtos/OfferResponseDto";

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private url = "http://localhost:8080/api/offer/";

  constructor(private httpClient: HttpClient){ }

  getAllOffers(): Observable<Array<OfferResponseDto>> {
    return this.httpClient.get<Array<OfferResponseDto>>(this.url);
  }
}
