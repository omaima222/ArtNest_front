import {UserDto} from "./UserDto";

export interface OfferResponseDto{
  id: bigint;
  name: string;
  price: number;
  image: string;
  user:UserDto;
}
