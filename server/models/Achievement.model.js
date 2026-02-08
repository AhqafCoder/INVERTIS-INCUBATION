import mongoose from 'mongoose';

const achievementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['award', 'recognition', 'milestone', 'success-story', 'other'],
    default: 'other'
  },
  image: String,
  date: {
    type: Date,
    required: true
  },
  organization: String,
  isPublished: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  link: String
}, {
  timestamps: true
});

export default mongoose.model('Achievement', achievementSchema);
