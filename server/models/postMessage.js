import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  id: Number,
  message: String,
  name: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;