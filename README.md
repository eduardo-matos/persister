# Persister

Gets message from RabbitMQ and saves it in MongoDB

## Env variables

1. `APP_QUEUE_NAME`: Queue name which messages will be consume from.
1. `APP_MIN_DURATION_IN_MILLISECONDS` (default: `0`): Min message processing duration.
1. `APP_MAX_DURATION_IN_MILLISECONDS` (default: `1000`): Max message processing duration.
1. `APP_ERROR_RATE` (default: `0.1`): Error rate between `0.0` and `1.0`.
1. `RABBITMQ_HOST` (default: `localhost`): RabbitMQ host.
1. `RABBITMQ_PORT` (default: `5672`): RabbitMQ port.
1. `RABBITMQ_USER` (default: `guest`): RabbitMQ username.
1. `RABBITMQ_PASS` (default: `guest`): RabbitMQ password.
1. `RABBITMQ_VHOST` (default: `/`): RabbitMQ virtual host.
1. `MONGODB_URL` (default: `mongodb://localhost:27017`): MongoDB connection URL.
1. `MONGODB_DATABASE` (default: `persister`): MongoDB database name.
1. `MONGODB_COLLECTION` (default: `events`): MongoDB collection name.
