import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  name: {
      type: String,
      required: true,
  },
  hotness: Number,
  ranking: Number,
  created: Date,
  relStatus: {
    voteId: Schema.Types.ObjectId,
    voters: {},
    keep: Number,
    replace: Number,
    competitor: String,
    voteExpiresAt: Date,
  }
});

export default mongoose.model('Topic', topicSchema);