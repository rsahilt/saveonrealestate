import db from '../config/db.js';

export const getListings = (req, res) => {
    const sql = "SELECT * FROM listings";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};