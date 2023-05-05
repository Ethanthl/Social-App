import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  id: Number,
  name: String,
  message: String, 
  file: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;