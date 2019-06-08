const { MongoClient } = require('mongodb');
const config = require('./config');

module.exports = new Promise((resolve, reject) => {
  const client = new MongoClient(config.MONGODB_URL, { useNewUrlParser: true });
  client.connect((err) => {
    if (err) reject(err);
    console.log("Connected successfully to server");
  
    const db = client.db(config.MONGODB_DATABASE);
    const collection = db.collection(config.MONGODB_COLLECTION);
 
    resolve(collection);
  });
});