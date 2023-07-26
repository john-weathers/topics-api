import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  name: {
      type: String,
      required: true,
  },
  hotness: Number,
  ranking: Number,
  relStatus: {
    voteId: Schema.Types.ObjectId,
    voters: {},
    keep: Number,
    replace: Number,
    competitor: String,
  }
});

export default mongoose.model('Topic', topicSchema);