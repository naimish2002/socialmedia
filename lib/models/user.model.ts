import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true},
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    emailVerified: { type: Boolean, default: false },
    image: { type: String },
    bio: { type: String },
    threads: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thread' }],
    onboarded: { type: Boolean, default: false },
    communities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Community' }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thread' }],
    bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thread' }],
    reposts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thread' }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
