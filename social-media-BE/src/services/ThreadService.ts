import { Thread } from "../entities/Thread";
import { User } from "../entities/User";
import { AppDataSource } from "../data-source";

export class ThreadService {
  private threadRepository = AppDataSource.getRepository(Thread);
  private userRepository = AppDataSource.getRepository(User);
  async createThread(
    conten: string,
    image: string | undefined,
    userId: number
  ): Promise<Thread> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });
    if (!user) {
      throw new Error("User not found");
    }
    const thread = new Thread();
    thread.conten = conten;

    if (image) {
      thread.image = image;
    }
    thread.user = user;

    return await this.threadRepository.save(thread);
  }

  async getAllThreadsWithTotalLikes(): Promise<Thread[]> {
    const threads = await this.threadRepository.find({
      relations: ["user", "likes", "comments", "comments.user"],
      order: {
        postAt: "DESC",
      },
    });

    threads.forEach((thread) => {
      thread.totalLikes = thread.likes.length;
      thread.totalComments = thread.comments.length;
    });

    return threads;
  }

  async getById(id: number) {
    const thread = await this.threadRepository.findOne({
      where: { id: id },
      relations: ["user", "likes", "comments", "comments.user"],
    });
    return thread;
  }
}
