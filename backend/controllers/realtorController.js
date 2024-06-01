import db from '../config/db.js';

export const getRealtors = (req, res) => {
    const sql = "SELECT * FROM realtors";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};