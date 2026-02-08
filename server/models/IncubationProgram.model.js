import mongoose from 'mongoose';

const incubationProgramSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['startup', 'innovation', 'technology', 'business', 'other'],
    default: 'other'
  },
  duration: {
    type: String,
    required: true
  },
  features: [{
    type: String
  }],
  eligibility: [{
    type: String
  }],
  applicationLink: {
    type: String
  },
  isActive: {
    type: Boolean,
    default: true
  },
  startDate: Date,
  endDate: Date,
  tags: [{
    type: String
  }]
}, {
  timestamps: true
});

// Create slug from title
incubationProgramSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

export default mongoose.model('IncubationProgram', incubationProgramSchema);
