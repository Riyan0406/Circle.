import { Thread } from "../entities/Thread";
import { User } from "../entities/User";
import { Like } from "../entities/Like";
import { AppDataSource } from "../data-source";

export class ThreadService {
  private threadRepository = AppDataSource.getRepository(Thread);
  private userRepository = AppDataSource.getRepository(User);
  private likeRepository = AppDataSource.getRepository(Like);

  async addLikeToThread(threadId: number, userId: number): Promise<void> {
    const thread = await this.threadRepository.findOne({
      where: { id: threadId },
    });
    const user = await this.userRepository.findOne({ where: { id: userId } });

    if (!thread || !user) {
      throw new Error("Thread or user not found");
    }

    const existingLike = await this.likeRepository.findOne({
      where: { thread, user },
    });

    if (existingLike) {
      throw new Error("User has already liked this thread");
    }

    const like = new Like();
    like.user = user;
    like.thread = thread;

    await this.likeRepository.save(like);
  }
}
