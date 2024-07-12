import { Request, Response } from "express";
import { ThreadService } from "../services/ThreadService";
import { uploadImage } from "../utils/cloudinary";
import { validateThread } from "../utils/validations/Thread";
import ThreadQueues from "../queues/ThreadQueues";
const threadService = new ThreadService();

export class ThreadController {
  // async createThread(req: Request, res: Response) {
  // const { conten } = req.body;
  // let image: string | undefined;

  // // Cek apakah ada file yang diunggah
  // if (req.file) {
  //   console.log(req.file);
  //   const imageBuffer: Buffer = req.file.buffer;
  //   const folder: string = "uploads";
  //   // Upload gambar
  //   const uploadedImage = await uploadImage(imageBuffer, folder);
  //   image = uploadedImage.secure_url;
  // }

  // try {
  //   // Buat thread
  //   const thread = await ThreadQueues.create(
  //     conten,
  //     image,
  //     req.auth.user.id
  //   );
  //   console.log("tes", req.auth);

  //   res.status(201).json(thread);
  //   } catch (error) {
  //     console.error("Error creating thread:", error);
  //     res.status(500).json({ message: "Internal server error" });
  //   }
  // }
  async createThread(req: Request, res: Response) {
    await ThreadQueues.create(req, res);
  }

  async getAllThreadsWithTotalLikes(req: Request, res: Response) {
    try {
      const threads = await threadService.getAllThreadsWithTotalLikes();
      const modifiedThreads = threads.map((thread) => ({
        ...thread,
        totalLikes: thread.totalLikes,
        totalComments: thread.totalComments,
      }));
      res.status(200).json(modifiedThreads);
    } catch (error) {
      console.error("Error getting threads:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const thread = await threadService.getById(parseInt(id));
    if (thread) {
      res.json(thread);
    } else {
      res.status(404).json({ message: "Thread not found" });
    }
  }
}
