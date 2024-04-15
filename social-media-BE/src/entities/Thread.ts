import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Comment } from "./Comment";
import { Like } from "./Like";

@Entity()
export class Thread {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  conten: string;

  @Column({ nullable: true })
  image: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  postAt: Date;
  @ManyToOne(() => User, (user) => user.posts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User;

  @OneToMany(() => Comment, (comment) => comment.post, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  comments: Comment[];

  @OneToMany(() => Like, (like) => like.thread, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  likes: Like[];

  @Column({ default: 0 })
  totalLikes: number;

  @Column({ default: 0 })
  totalComments: number;
}
