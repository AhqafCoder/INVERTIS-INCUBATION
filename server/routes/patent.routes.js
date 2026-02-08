import express from 'express';
import Patent from '../models/Patent.model.js';
import { protect, adminOnly } from '../middleware/auth.middleware.js';
import { upload } from '../middleware/upload.middleware.js';

const router = express.Router();

// @route   GET /api/patents
// @desc    Get all patents
// @access  Public
router.get('/', async (req, res, next) => {
  try {
    const { category, status, isPublished } = req.query;
    const filter = {};
    
    if (category) filter.category = category;
    if (status) filter.status = status;
    if (isPublished !== undefined) filter.isPublished = isPublished === 'true';

    const patents = await Patent.find(filter).sort({ filingDate: -1 });
    res.json({ patents });
  } catch (error) {
    next(error);
  }
});

// @route   POST /api/patents
// @desc    Create patent
// @access  Private
router.post('/', protect, upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'pdf', maxCount: 1 }
]), async (req, res, next) => {
  try {
    const patentData = {
      ...req.body,
      inventors: req.body.inventors ? JSON.parse(req.body.inventors) : []
    };

    if (req.files) {
      if (req.files.image) {
        patentData.image = `/uploads/image/${req.files.image[0].filename}`;
      }
      if (req.files.pdf) {
        patentData.pdfUrl = `/uploads/pdf/${req.files.pdf[0].filename}`;
      }
    }

    const patent = await Patent.create(patentData);
    res.status(201).json({ patent });
  } catch (error) {
    next(error);
  }
});

// @route   PUT /api/patents/:id
// @desc    Update patent
// @access  Private
router.put('/:id', protect, upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'pdf', maxCount: 1 }
]), async (req, res, next) => {
  try {
    const patentData = {
      ...req.body,
      inventors: req.body.inventors ? JSON.parse(req.body.inventors) : undefined
    };

    if (req.files) {
      if (req.files.image) {
        patentData.image = `/uploads/image/${req.files.image[0].filename}`;
      }
      if (req.files.pdf) {
        patentData.pdfUrl = `/uploads/pdf/${req.files.pdf[0].filename}`;
      }
    }

    const patent = await Patent.findByIdAndUpdate(
      req.params.id,
      patentData,
      { new: true, runValidators: true }
    );

    if (!patent) {
      return res.status(404).json({ error: { message: 'Patent not found' } });
    }

    res.json({ patent });
  } catch (error) {
    next(error);
  }
});

// @route   DELETE /api/patents/:id
// @desc    Delete patent
// @access  Private (Admin)
router.delete('/:id', protect, adminOnly, async (req, res, next) => {
  try {
    const patent = await Patent.findByIdAndDelete(req.params.id);
    
    if (!patent) {
      return res.status(404).json({ error: { message: 'Patent not found' } });
    }

    res.json({ message: 'Patent deleted successfully' });
  } catch (error) {
    next(error);
  }
});

export default router;
