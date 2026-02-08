import express from 'express';
import Event from '../models/Event.model.js';
import { protect, adminOnly } from '../middleware/auth.middleware.js';
import { upload } from '../middleware/upload.middleware.js';

const router = express.Router();

// @route   GET /api/events
// @desc    Get all events
// @access  Public
router.get('/', async (req, res, next) => {
  try {
    const { category, isFeatured, isPublished } = req.query;
    const filter = {};
    
    if (category) filter.category = category;
    if (isFeatured !== undefined) filter.isFeatured = isFeatured === 'true';
    if (isPublished !== undefined) filter.isPublished = isPublished === 'true';

    const events = await Event.find(filter).sort({ date: -1 });
    res.json({ events });
  } catch (error) {
    next(error);
  }
});

// @route   GET /api/events/:id
// @desc    Get single event
// @access  Public
router.get('/:id', async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);
    
    if (!event) {
      return res.status(404).json({ error: { message: 'Event not found' } });
    }

    res.json({ event });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/events
// @desc    Create new event
// @access  Private
router.post('/', protect, upload.array('images', 10), async (req, res, next) => {
  try {
    const eventData = {
      ...req.body,
      speakers: req.body.speakers ? JSON.parse(req.body.speakers) : []
    };

    if (req.files && req.files.length > 0) {
      eventData.images = req.files.map(file => ({
        url: `/uploads/images/${file.filename}`,
        caption: ''
      }));
    }

    const event = await Event.create(eventData);
    res.status(201).json({ event });
  } catch (error) {
    next(error);
  }
});

// @route   PUT /api/events/:id
// @desc    Update event
// @access  Private
router.put('/:id', protect, upload.array('images', 10), async (req, res, next) => {
  try {
    const eventData = {
      ...req.body,
      speakers: req.body.speakers ? JSON.parse(req.body.speakers) : undefined
    };

    if (req.files && req.files.length > 0) {
      const newImages = req.files.map(file => ({
        url: `/uploads/images/${file.filename}`,
        caption: ''
      }));
      
      const existingImages = req.body.existingImages ? JSON.parse(req.body.existingImages) : [];
      eventData.images = [...existingImages, ...newImages];
    }

    const event = await Event.findByIdAndUpdate(
      req.params.id,
      eventData,
      { new: true, runValidators: true }
    );

    if (!event) {
      return res.status(404).json({ error: { message: 'Event not found' } });
    }

    res.json({ event });
  } catch (error) {
    next(error);
  }
});

// @route   DELETE /api/events/:id
// @desc    Delete event
// @access  Private (Admin)
router.delete('/:id', protect, adminOnly, async (req, res, next) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    
    if (!event) {
      return res.status(404).json({ error: { message: 'Event not found' } });
    }

    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    next(error);
  }
});

export default router;
