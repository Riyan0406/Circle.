import { Comment } from "../entities/Comment";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";
import { Thread } from "../entities/Thread";

export class CommentService {
  private commentRepository = AppDataSource.getRepository(Comment);
  private userRepository = AppDataSource.getRepository(User);
  private threadRepository = AppDataSource.getRepository(Thread);

  async addComment(
    comment_text: string,
    // image: string,
    userId: number,
    threadId: number
  ): Promise<Comment> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });
    if (!user) {
      throw new Error("User not found");
    }

    const thread = await this.threadRepository.findOne({
      where: { id: threadId },
    });

    const comment = new Comment();
    comment.comment_text = comment_text;
    // comment.image = image;
    comment.user = user;
    comment.post = thread;
    return await this.commentRepository.save(comment);
  }

  async getCommentsByPostId(threadId: number) {
    try {
      return await this.commentRepository.find({
        where: { post: { id: threadId } },
        relations: ["user", "post"],
      });
    } catch (error) {
      console.error("Error getting comments by postId:", error);
      throw new Error("Failed to get comments by postId");
    }
  }

  async getAllComments(): Promise<Comment[]> {
    try {
      return await this.commentRepository.find({ relations: ["user", "post"] });
    } catch (error) {
      console.error("Error getting all comments:", error);
      throw new Error("Failed to get comments");
    }
  }
}
