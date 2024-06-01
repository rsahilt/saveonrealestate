import mysql from 'mysql';
import db from '../config/db.js';

// Create realtors table
const createRealtorsTable = `
    CREATE TABLE IF NOT EXISTS realtors (
        id INT AUTO_INCREMENT PRIMARY KEY,
        firstname VARCHAR(255) NOT NULL,
        lastname VARCHAR(255) NOT NULL,
        dob DATE NOT NULL,
        title VARCHAR(255),
        licensenumber VARCHAR(255),
        contactnumber VARCHAR(255),
        street VARCHAR(255),
        city VARCHAR(255),
        province VARCHAR(255),
        country VARCHAR(255),
        email VARCHAR(255),
        image VARCHAR(255)
    )
`;

db.query(createRealtorsTable, (err, result) => {
    if (err) {
        console.error('Error creating realtors table:', err);
    } else {
        console.log('Realtors table created or already exists.');
    }
});

db.end();
