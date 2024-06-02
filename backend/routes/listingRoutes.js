import express from 'express';
import { getListings, getListing } from '../controllers/listingController.js';

const router = express.Router();

router.get('/', getListings);
router.get('/:id', getListing);

export default router;
