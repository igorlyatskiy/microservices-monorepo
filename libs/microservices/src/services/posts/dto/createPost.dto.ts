import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  nickname: string;
}
