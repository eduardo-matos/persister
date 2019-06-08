const mongo = require('./mongo');
const rabbit = require('./rabbit');
const config = require('./config');

async function main() {
  await rabbit(async (msg) => {
    const collection = await mongo; 

    await slowProcess();

    if (error()) {
      return reject(new Error('An unexpected error occurred'));
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
