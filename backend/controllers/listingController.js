import { getAllListings, getListingById } from '../models/listingModel.js';

export const getListings = (req, res) => {
  getAllListings((err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const getListing = (req, res) => {
  const { id } = req.params;
  getListingById(id, (err, data) => {
    if (err) return res.status(500).json(err);
    if (!data) return res.status(404).json({ message: "Listing not found" });
    return res.status(200).json(data);
  });
};
