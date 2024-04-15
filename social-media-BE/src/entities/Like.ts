import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Thread } from "./Thread";

@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  like_id: number;

  @ManyToOne(() => User, (user) => user.likes, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User;

  @ManyToOne(() => Thread, (post) => post.likes, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  thread: Thread;
}
