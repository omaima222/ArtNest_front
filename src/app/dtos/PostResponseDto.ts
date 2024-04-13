import {UserDto} from "./UserDto";

export interface PostResponseDto{
  id: bigint;
  name: string;
  description: string;
  image: string;
  user:UserDto;
}
