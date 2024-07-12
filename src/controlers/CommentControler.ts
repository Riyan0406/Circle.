import { Request, Response } from "express";
import { CommentService } from "../services/Comment";

const commentService = new CommentService();

export class CommentController {
  async addComment(req: Request, res: Response) {
    const { comment_text, threadId } = req.body;
    if (!comment_text || comment_text.trim() === "") {
      return res.status(400).json({ message: "Comment text is required" });
    }
    try {
      const comment = await commentService.addComment(
        comment_text,
        req.auth.user.id,
        threadId
      );
      res.status(201).json(comment);
    } catch (error) {
      console.error("Error adding comment:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  async getCommentsByPostId(req: Request, res: Response) {
    const { id } = req.params;

    // Validasi postId
    if (isNaN(parseInt(id))) {
      return res.status(400).json({ message: "Invalid postId" });
    }

    try {
      const comments = await commentService.getCommentsByPostId(parseInt(id));
      res.status(200).json(comments);
    } catch (error) {
      console.error("Error getting comments by postId:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  async getAllComments(req: Request, res: Response) {
    try {
      const comments = await commentService.getAllComments();
      res.status(200).json(comments);
    } catch (error) {
      console.error("Error getting comments:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
