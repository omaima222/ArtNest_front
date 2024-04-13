import {UserDto} from "./UserDto";
import {OfferResponseDto} from "./OfferResponseDto";

export interface CommissionResponseDto{
  id: bigint;
  description: string;
  status: number;
  progress: string;
  client:UserDto;
  artist:UserDto;
  offer:OfferResponseDto;
}
