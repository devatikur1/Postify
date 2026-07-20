const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  image: String,
  caption: String,
  tags: Array,
});

const postModel = mongoose.model("post", postSchema);

module.exports = postModel;