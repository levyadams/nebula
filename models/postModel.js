const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title :{},
  description :{},
  subPosts :{},
  comments : {
  }
});

const PostModel = mongoose.model('post', PostSchema);

module.exports = PostModel;