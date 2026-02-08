import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  images: [{
    url: String,
    caption: String
  }],
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['workshop', 'seminar', 'hackathon', 'networking', 'launch', 'other'],
    default: 'other'
  },
  speakers: [{
    name: String,
    designation: String,
    image: String
  }],
  registrationLink: String,
  isPublished: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export default mongoose.model('Event', eventSchema);
