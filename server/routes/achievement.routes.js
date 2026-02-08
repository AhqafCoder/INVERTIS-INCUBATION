import express from 'express';
import Achievement from '../models/Achievement.model.js';
import { protect, adminOnly } from '../middleware/auth.middleware.js';
import { upload } from '../middleware/upload.middleware.js';

const router = express.Router();

// @route   GET /api/achievements
// @desc    Get all achievements
// @access  Public
router.get('/', async (req, res, next) => {
  try {
    const { category, isFeatured, isPublished } = req.query;
    const filter = {};
    
    if (category) filter.category = category;
    if (isFeatured !== undefined) filter.isFeatured = isFeatured === 'true';
    if (isPublished !== undefined) filter.isPublished = isPublished === 'true';

    const achievements = await Achievement.find(filter).sort({ date: -1 });
    res.json({ achievements });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/achievements
// @desc    Create achievement
// @access  Private
router.post('/', protect, upload.single('image'), async (req, res, next) => {
  try {
    const achievementData = { ...req.body };

    if (req.file) {
      achievementData.image = `/uploads/image/${req.file.filename}`;
    }

    const achievement = await Achievement.create(achievementData);
    res.status(201).json({ achievement });
  } catch (error) {
    next(error);
  }
});

// @route   PUT /api/achievements/:id
// @desc    Update achievement
// @access  Private
router.put('/:id', protect, upload.single('image'), async (req, res, next) => {
  try {
    const achievementData = { ...req.body };

    if (req.file) {
      achievementData.image = `/uploads/image/${req.file.filename}`;
    }

    const achievement = await Achievement.findByIdAndUpdate(
      req.params.id,
      achievementData,
      { new: true, runValidators: true }
    );

    if (!achievement) {
      return res.status(404).json({ error: { message: 'Achievement not found' } });
    }

    res.json({ achievement });
  } catch (error) {
    next(error);
  }
});

// @route   DELETE /api/achievements/:id
// @desc    Delete achievement
// @access  Private (Admin)
router.delete('/:id', protect, adminOnly, async (req, res, next) => {
  try {
    const achievement = await Achievement.findByIdAndDelete(req.params.id);
    
    if (!achievement) {
      return res.status(404).json({ error: { message: 'Achievement not found' } });
    }

    res.json({ message: 'Achievement deleted successfully' });
  } catch (error) {
    next(error);
  }
});

export default router;
