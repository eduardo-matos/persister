const amqp = require('amqplib');
const config = require('./config');

const e = encodeURIComponent;

module.exports = (consumer) => new Promise(async (resolve, reject) => {
  const conn = await amqp.connect(`amqp://${e(config.RABBITMQ_USER)}:${e(config.RABBITMQ_PASS)}@${e(config.RABBITMQ_HOST)}:${config.RABBITMQ_PORT}/${e(config.RABBITMQ_VHOST)}`)
  const channel = await conn.createChannel();
  await channel.assertQueue(config.SOURCE_QUEUE_NAME);

  await channel.prefetch(config.CONCURRENCY);

  channel.consume(config.SOURCE_QUEUE_NAME, async (rawMsg) => {
    if (rawMsg !== null) {
      const msg = JSON.parse(rawMsg.content.toString());

      try {
        const result = await consumer(msg);
        console.log(`Inserted Id="${result.insertedId}"`);
        channel.ack(rawMsg);
      } catch (err) {
        console.error(`Failed to insert "${JSON.stringify(msg)}"`);
        channel.nack(rawMsg, false, true);
      }
    }
  });
});
