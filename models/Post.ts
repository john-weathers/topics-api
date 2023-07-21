import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  comment: String,
  rating: Number,
  raters: {},
  created: Date,
  commenter: { type: Schema.Types.ObjectId, ref: 'User' },
});

const postSchema = new Schema({
  topic: String,
  title: {
      type: String,
      required: true,
  },
  description: String,
  rating: Number,
  raters: {},
  created: Date,
  expireAt: {
    type: Date,
    expires: 30, // 30 seconds, for testing purposes
  },
  poster: { type: Schema.Types.ObjectId, ref: 'User' },
  comments: [commentSchema],
});

export default mongoose.model('Post', postSchema);