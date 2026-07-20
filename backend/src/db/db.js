const mongoose = require('mongoose');

async function contectDB() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to DB");
}

module.exports = contectDB