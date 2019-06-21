const mongo = require('./mongo');
const rabbit = require('./rabbit');
const config = require('./config');

async function main() {
  const collection = await mongo;

  rabbit(async (msg) => {
    await slowProcess();

    if (error()) {
      throw new Error('An unexpected error occurred');
    }

    return new Promise(async (resolve, reject) => {
      collection.insertOne(msg, (err, result) => {
        if (err !== null) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  });
}

function slowProcess() {
  const timeout = rand(config.MIN_DURATION_IN_MILLISECONDS, config.MAX_DURATION_IN_MILLISECONDS)
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

function error() {
  return rand(1, 100) <= config.ERROR_RATE * 100;
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

main();
