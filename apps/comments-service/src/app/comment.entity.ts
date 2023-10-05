import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'comments' })
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  commentId: string;

  @Column('uuid')
  postId: string;

  @Column({ name: 'userId' })
  creatorId: string;

  @Column()
  body: string;
}
