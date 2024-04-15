import * as amqp from "amqplib";

export default new (class RabbitMQ {
  sendToQueue = async (queueName: string, payload: any) => {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    await channel.assertQueue(queueName);

    channel.sendToQueue(queueName, Buffer.from(payload));

    await channel.close();
    await connection.close();
  };

  consume = async (queueName: string) => {};
})();
