import express from 'express';
import IncubationProgram from '../models/IncubationProgram.model.js';
import { protect, adminOnly } from '../middleware/auth.middleware.js';
import { upload } from '../middleware/upload.middleware.js';

const router = express.Router();

// @route   GET /api/incubation
// @desc    Get all incubation programs
// @access  Public
router.get('/', async (req, res, next) => {
  try {
    const { category, isActive } = req.query;
    const filter = {};
    
    if (category) filter.category = category;
    if (isActive !== undefined) filter.isActive = isActive === 'true';

    const programs = await IncubationProgram.find(filter).sort({ createdAt: -1 });
    res.json({ programs });
  } catch (error) {
    next(error);
  }
});

// @route   GET /api/incubation/:slug
// @desc    Get single program by slug
// @access  Public
router.get('/:slug', async (req, res, next) => {
  try {
    const program = await IncubationProgram.findOne({ slug: req.params.slug });
    
    if (!program) {
      return res.status(404).json({ error: { message: 'Program not found' } });
    }

    res.json({ program });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/incubation
// @desc    Create new program
// @access  Private (Admin)
router.post('/', protect, upload.single('image'), async (req, res, next) => {
  try {
    const programData = {
      ...req.body,
      features: req.body.features ? JSON.parse(req.body.features) : [],
      eligibility: req.body.eligibility ? JSON.parse(req.body.eligibility) : [],
      tags: req.body.tags ? JSON.parse(req.body.tags) : []
    };

    if (req.file) {
      programData.image = `/uploads/image/${req.file.filename}`;
    }

    const program = await IncubationProgram.create(programData);
    res.status(201).json({ program });
  } catch (error) {
    next(error);
  }
});

// @route   PUT /api/incubation/:id
// @desc    Update program
// @access  Private (Admin)
router.put('/:id', protect, upload.single('image'), async (req, res, next) => {
  try {
    const programData = {
      ...req.body,
      features: req.body.features ? JSON.parse(req.body.features) : undefined,
      eligibility: req.body.eligibility ? JSON.parse(req.body.eligibility) : undefined,
      tags: req.body.tags ? JSON.parse(req.body.tags) : undefined
    };

    if (req.file) {
      programData.image = `/uploads/image/${req.file.filename}`;
    }

    const program = await IncubationProgram.findByIdAndUpdate(
      req.params.id,
      programData,
      { new: true, runValidators: true }
    );

    if (!program) {
      return res.status(404).json({ error: { message: 'Program not found' } });
    }

    res.json({ program });
  } catch (error) {
    next(error);
  }
});

// @route   DELETE /api/incubation/:id
// @desc    Delete program
// @access  Private (Admin)
router.delete('/:id', protect, adminOnly, async (req, res, next) => {
  try {
    const program = await IncubationProgram.findByIdAndDelete(req.params.id);
    
    if (!program) {
      return res.status(404).json({ error: { message: 'Program not found' } });
    }

    res.json({ message: 'Program deleted successfully' });
  } catch (error) {
    next(error);
  }
});

export default router;
