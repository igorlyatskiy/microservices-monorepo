import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'posts' })
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  postId: string;

  @Column({ name: 'userId' })
  userId: string;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column({
    nullable: true,
    default: 0,
  })
  likes: string;

  @Column({
    nullable: true,
    default: 0,
  })
  dislikes: string;
}
