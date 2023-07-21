import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  name: {
      type: String,
      required: true,
  },
  hotness: Number,
  rating: Number,
});

export default mongoose.model('Topic', topicSchema);