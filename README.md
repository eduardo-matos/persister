# Persister

Gets messages from RabbitMQ and saves them in MongoDB

## Env variables

1. **`RABBITMQ_SOURCE_QUEUE_NAME`**: RabbitMQ queue name which messages will be consume from.
1. `RABBITMQ_HOST` (default: `localhost`): RabbitMQ host.
1. `RABBITMQ_PORT` (default: `5672`): RabbitMQ port.
1. `RABBITMQ_USER` (default: `guest`): RabbitMQ username.
1. `RABBITMQ_PASS` (default: `guest`): RabbitMQ password.
1. `RABBITMQ_VHOST` (default: `/`): RabbitMQ virtual host.
1. `APP_CONCURRENCY` (default: `1`): Maximum number of messages that can be processed concurrently.
1. `APP_MIN_DURATION_IN_MILLISECONDS` (default: `0`): Minimum message processing duration in milliseconds.
1. `APP_MAX_DURATION_IN_MILLISECONDS` (default: `1000`): Minimum message processing duration in milliseconds.
1. `APP_ERROR_RATE` (default: `0.1`): Error rate between `0.0` and `1.0`.
1. `MONGODB_URL` (default: `mongodb://localhost:27017`): MongoDB connection URL.
1. `MONGODB_DATABASE_NAME` (default: `persister`): MongoDB database name.
1. `MONGODB_COLLECTION_NAME` (default: `events`): MongoDB collection name.

## Build

```sh
docker build . -t persister
```

## Run

```sh
docker run \
  -e RABBITMQ_SOURCE_QUEUE_NAME="egg" \
  -e RABBITMQ_HOST="localhost" \
  -e RABBITMQ_PORT="5672" \
  -e RABBITMQ_USER="guest" \
  -e RABBITMQ_PASS="guest" \
  -e RABBITMQ_VHOST="/" \
  -e APP_CONCURRENCY="1" \
  -e APP_MIN_DURATION_IN_MILLISECONDS="0" \
  -e APP_MAX_DURATION_IN_MILLISECONDS="1000" \
  -e APP_ERROR_RATE="0.1" \
  -e MONGODB_URL="mongodb://localhost:27017" \
  -e MONGODB_DATABASE_NAME="persister" \
  -e MONGODB_COLLECTION_NAME="events" \
  persister
```

Make sure to use the `--net=host` option if RabbitMQ and MongoDB are running in the host network.
