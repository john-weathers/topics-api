import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
      type: String,
      required: true,
      match: /^[A-Za-zÀ-ÖØ-öø-ÿ0-9]{3,20}$/,
  },
  password: {
      type: String,
      required: true,
  },
  rating: Number,
  refreshToken: [String],
  /*prevTokens: {
      refreshTokens: [String],
      lastRefresh: Date,
      accessToken: String,
  },*/
});

export default mongoose.model('User', userSchema);