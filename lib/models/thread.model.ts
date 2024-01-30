import mongoose from 'mongoose';

const threadSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    images: [String],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    community: { type: mongoose.Schema.Types.ObjectId, ref: 'Community' },
    parentId: { type: String },
    children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thread' }],
    likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    reposts: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  },
  {
    timestamps: true,
  }
);

const Thread = mongoose.models.Thread || mongoose.model('Thread', threadSchema);

export default Thread;
