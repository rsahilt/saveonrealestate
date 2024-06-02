import db from '../config/db.js';

export const getAllListings = (callback) => {
  const sql = "SELECT * FROM listings";
  db.query(sql, (err, data) => {
    if (err) return callback(err);
    return callback(null, data);
  });
};

export const getListingById = (id, callback) => {
  const sql = "SELECT * FROM listings WHERE id = ?";
  db.query(sql, [id], (err, data) => {
    if (err) return callback(err);
    return callback(null, data[0]);
  });
};
