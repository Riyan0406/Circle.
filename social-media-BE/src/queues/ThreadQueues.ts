import { Request, Response } from "express";
import * as ampq from "amqplib";
import rabbitmq from "../libs/rabbitmq";
import { uploadImage } from "../utils/cloudinary";
import { validateThread } from "../utils/validations/Thread";
import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

export default new (class ThreadQueue {
  private userRepository = AppDataSource.getRepository(User);
  async create(req: Request, res: Response) {
    try {
      let image: string | undefined;
      if (req.file) {
        console.log(req.file);
        const imageBuffer: Buffer = req.file.buffer;
        const folder: string = "uploads";
        // Upload gambar
        const uploadedImage = await uploadImage(imageBuffer, folder);
        image = uploadedImage.secure_url;
      }
      const user = await this.userRepository.findOne({
        where: { id: req.auth.user.id },
      });
      console.log("user", user);

      if (!user) {
        throw new Error("User not found");
      }

      const data = {
        ...req.body,
        image,
        user: user,
      };

      const { error } = validateThread.validate(data);

      if (error) {
        return res.status(400).json({
          error: error,
        });
      }

      rabbitmq.sendToQueue("thread", JSON.stringify(data));

      res.status(200).json({
        messsage: "Thread enqueued!",
      });
    } catch (error: unknown) {
      res.status(500).json({
        error: "Something wrong in the server!",
      });
    }
  }
})();
