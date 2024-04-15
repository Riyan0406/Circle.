import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Thread } from "./Thread";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  comment_id: number;

  @Column()
  comment_text: string;

  @Column({ nullable: true })
  image: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  comment_date: Date;

  @ManyToOne(() => User, (user) => user.comments, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User;

  @ManyToOne(() => Thread, (post) => post.comments, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  post: Thread;
}
