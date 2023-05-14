import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  id: Number,
  name: String,
  message: String, 
  file: String,
  likes: {type: Number, default: 0},
  comments: {type: [String], default: []},
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;