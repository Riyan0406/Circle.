import * as amqp from "amqplib";
import { AppDataSource } from "../data-source";
import { Thread } from "../entities/Thread";
import { request } from "http";

class ThreadWorker {
  async create() {
    const threadRepository = AppDataSource.getRepository(Thread);
    try {
      const connection = await amqp.connect("amqp://localhost");
      console.log("Connected to RabbitMQ");

      const channel = await connection.createChannel();
      console.log("Channel created");

      await channel.assertQueue("thread");
      console.log("Queue 'thread' asserted");

      channel.consume("thread", async (message) => {
        console.log("Message received from 'thread' queue");

        try {
          const payload = JSON.parse(message.content.toString());
          console.log("payload:", payload);
          channel.ack(message);
          console.log("Message acknowledged");

          const thread = threadRepository.create({
            conten: payload.conten,
            image: payload.image,
            user: payload.user,
          });

          console.log("Thread created:", thread);

          await threadRepository.save(thread);
          console.log("Thread saved to database", thread);
          const req = request({
            hostname: "localhost",
            port: 3002,
            path: "/api/v1/new-thread",
            method: "GET",
          });

          req.on("error", (error) => {
            console.log("Thread worker error: ", error);
          });

          req.end();
        } catch (error) {
          console.error("Error processing message:", error);
        }
      });
    } catch (error) {
      console.error("Error creating thread worker:", error);
    }
  }
}

export default new ThreadWorker();
