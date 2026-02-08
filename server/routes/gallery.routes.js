import express from 'express';
import Gallery from '../models/Gallery.model.js';
import { protect, adminOnly } from '../middleware/auth.middleware.js';
import { upload } from '../middleware/upload.middleware.js';

const router = express.Router();

// @route   GET /api/gallery
// @desc    Get all gallery images
// @access  Public
router.get('/', async (req, res, next) => {
  try {
    const { category, isPublished } = req.query;
    const filter = {};
    
    if (category) filter.category = category;
    if (isPublished !== undefined) filter.isPublished = isPublished === 'true';

    const images = await Gallery.find(filter).sort({ order: 1, createdAt: -1 });
    res.json({ images });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/gallery
// @desc    Upload gallery image
// @access  Private
router.post('/', protect, upload.single('image'), async (req, res, next) => {
  try {
    const galleryData = {
      ...req.body,
      tags: req.body.tags ? JSON.parse(req.body.tags) : []
    };

    if (req.file) {
      galleryData.image = `/uploads/image/${req.file.filename}`;
    }

    const gallery = await Gallery.create(galleryData);
    res.status(201).json({ gallery });
  } catch (error) {
    next(error);
  }
});

// @route   PUT /api/gallery/:id
// @desc    Update gallery image
// @access  Private
router.put('/:id', protect, upload.single('image'), async (req, res, next) => {
  try {
    const galleryData = {
      ...req.body,
      tags: req.body.tags ? JSON.parse(req.body.tags) : undefined
    };

    if (req.file) {
      galleryData.image = `/uploads/image/${req.file.filename}`;
    }

    const gallery = await Gallery.findByIdAndUpdate(
      req.params.id,
      galleryData,
      { new: true, runValidators: true }
    );

    if (!gallery) {
      return res.status(404).json({ error: { message: 'Gallery item not found' } });
    }

    res.json({ gallery });
  } catch (error) {
    next(error);
  }
});

// @route   DELETE /api/gallery/:id
// @desc    Delete gallery image
// @access  Private (Admin)
router.delete('/:id', protect, adminOnly, async (req, res, next) => {
  try {
    const gallery = await Gallery.findByIdAndDelete(req.params.id);
    
    if (!gallery) {
      return res.status(404).json({ error: { message: 'Gallery item not found' } });
    }

    res.json({ message: 'Gallery item deleted successfully' });
  } catch (error) {
    next(error);
  }
});

export default router;
