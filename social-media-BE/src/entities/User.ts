import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Thread } from "./Thread";
import { Comment } from "./Comment";
import { Like } from "./Like";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  profile: string;

  @Column({ nullable: true })
  sampul: string;

  @OneToMany(() => Thread, (post) => post.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  posts: Thread[];

  @OneToMany(() => Comment, (comment) => comment.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  comments: Comment[];

  @OneToMany(() => Like, (like) => like.user, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  likes: Like[];
}
