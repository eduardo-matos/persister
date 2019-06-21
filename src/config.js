module.exports.MIN_DURATION_IN_MILLISECONDS = parseInt(process.env.APP_MIN_DURATION_IN_MILLISECONDS, 10) || 0;
module.exports.MAX_DURATION_IN_MILLISECONDS = parseInt(process.env.APP_MAX_DURATION_IN_MILLISECONDS, 10) || 1000;
module.exports.ERROR_RATE = parseFloat(process.env.APP_ERROR_RATE) || 0.1;
module.exports.CONCURRENCY = parseInt(process.env.APP_CONCURRENCY, 10) || 1;


module.exports.SOURCE_QUEUE_NAME = process.env.RABBITMQ_SOURCE_QUEUE_NAME;
module.exports.RABBITMQ_HOST = process.env.RABBITMQ_HOST || 'localhost';
module.exports.RABBITMQ_PORT = process.env.RABBITMQ_PORT || '5672'; 
module.exports.RABBITMQ_USER = process.env.RABBITMQ_USER || 'guest';
module.exports.RABBITMQ_PASS = process.env.RABBITMQ_PASS || 'guest';
module.exports.RABBITMQ_VHOST = process.env.RABBITMQ_VHOST || '/';

module.exports.MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017';
module.exports.MONGODB_DATABASE_NAME = process.env.MONGODB_DATABASE_NAME || 'persister';
module.exports.MONGODB_COLLECTION_NAME = process.env.MONGODB_COLLECTION_NAME || 'events';
