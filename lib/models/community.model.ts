import mongoose from 'mongoose';

const communitySchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    image: { type: String },
    bio: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    threads: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thread' }],
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    moderators: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  {
    timestamps: true,
  }
);

const Community = mongoose.models.Community || mongoose.model('Community', communitySchema);

export default Community;
