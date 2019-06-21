const { MongoClient } = require('mongodb');
const config = require('./config');

module.exports = new Promise((resolve, reject) => {
  const client = new MongoClient(`${config.MONGODB_URL}/${config.MONGODB_DATABASE_NAME}`, { useNewUrlParser: true });

  client.connect((err) => {
    if (err) {
      return reject(err);
    }

    console.log("Connected successfully to server");

    const db = client.db(config.MONGODB_DATABASE_NAME)
    const collection = db.collection(config.MONGODB_COLLECTION_NAME);

    resolve(collection);
  });
});
