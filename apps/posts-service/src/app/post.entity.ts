import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'posts' })
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  postId: string;

  @Column({ name: 'userId' })
  creatorId: string;

  @Column()
  title: string;

  @Column()
  body: string;
}
