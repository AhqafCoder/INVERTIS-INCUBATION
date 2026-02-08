import mongoose from 'mongoose';

const patentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  patentNumber: {
    type: String,
    required: true,
    unique: true
  },
  inventors: [{
    name: String,
    designation: String
  }],
  filingDate: {
    type: Date,
    required: true
  },
  grantDate: Date,
  status: {
    type: String,
    enum: ['filed', 'published', 'granted', 'rejected'],
    default: 'filed'
  },
  category: {
    type: String,
    enum: ['technology', 'biotech', 'mechanical', 'chemical', 'other'],
    default: 'other'
  },
  image: String,
  pdfUrl: String,
  isPublished: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Patent', patentSchema);
