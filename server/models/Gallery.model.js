import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: String,
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['event', 'facility', 'team', 'startup', 'achievement', 'other'],
    default: 'other'
  },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  },
  order: {
    type: Number,
    default: 0
  },
  isPublished: {
    type: Boolean,
    default: true
  },
  tags: [{
    type: String
  }]
}, {
  timestamps: true
});

export default mongoose.model('Gallery', gallerySchema);
