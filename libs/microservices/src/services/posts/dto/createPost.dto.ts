import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  body: string;

  @IsNotEmpty()
  @IsUUID()
  creatorId: string;
}
