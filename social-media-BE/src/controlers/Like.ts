import { Request, Response } from "express";
import { ThreadService } from "../services/LikeService";

const threadService = new ThreadService();

export class LikeController {
  async addLikeToThread(req: Request, res: Response) {
    const { threadId, userId } = req.body;

    try {
      await threadService.addLikeToThread(threadId, userId);
      res.status(201).json({ message: "Like added to thread successfully" });
    } catch (error) {
      console.error("Error adding like to thread:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
