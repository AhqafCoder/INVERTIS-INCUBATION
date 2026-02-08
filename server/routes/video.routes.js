import express from 'express';
import Video from '../models/Video.model.js';
import { protect, adminOnly } from '../middleware/auth.middleware.js';
import { upload } from '../middleware/upload.middleware.js';

const router = express.Router();

// @route   GET /api/videos
// @desc    Get all videos
// @access  Public
router.get('/', async (req, res, next) => {
  try {
    const { category, isFeatured, isPublished } = req.query;
    const filter = {};
    
    if (category) filter.category = category;
    if (isFeatured !== undefined) filter.isFeatured = isFeatured === 'true';
    if (isPublished !== undefined) filter.isPublished = isPublished === 'true';

    const videos = await Video.find(filter).sort({ date: -1 });
    res.json({ videos });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/videos
// @desc    Create video
// @access  Private
router.post('/', protect, upload.fields([
  { name: 'video', maxCount: 1 },
  { name: 'thumbnail', maxCount: 1 }
]), async (req, res, next) => {
  try {
    const videoData = { ...req.body };

    if (req.files) {
      if (req.files.video) {
        videoData.videoUrl = `/uploads/video/${req.files.video[0].filename}`;
      }
      if (req.files.thumbnail) {
        videoData.thumbnailUrl = `/uploads/thumbnail/${req.files.thumbnail[0].filename}`;
      }
    }

    const video = await Video.create(videoData);
    res.status(201).json({ video });
  } catch (error) {
    next(error);
  }
});

// @route   PUT /api/videos/:id
// @desc    Update video
// @access  Private
router.put('/:id', protect, upload.fields([
  { name: 'video', maxCount: 1 },
  { name: 'thumbnail', maxCount: 1 }
]), async (req, res, next) => {
  try {
    const videoData = { ...req.body };

    if (req.files) {
      if (req.files.video) {
        videoData.videoUrl = `/uploads/video/${req.files.video[0].filename}`;
      }
      if (req.files.thumbnail) {
        videoData.thumbnailUrl = `/uploads/thumbnail/${req.files.thumbnail[0].filename}`;
      }
    }

    const video = await Video.findByIdAndUpdate(
      req.params.id,
      videoData,
      { new: true, runValidators: true }
    );

    if (!video) {
      return res.status(404).json({ error: { message: 'Video not found' } });
    }

    res.json({ video });
  } catch (error) {
    next(error);
  }
});

// @route   DELETE /api/videos/:id
// @desc    Delete video
// @access  Private (Admin)
router.delete('/:id', protect, adminOnly, async (req, res, next) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);
    
    if (!video) {
      return res.status(404).json({ error: { message: 'Video not found' } });
    }

    res.json({ message: 'Video deleted successfully' });
  } catch (error) {
    next(error);
  }
});

export default router;
