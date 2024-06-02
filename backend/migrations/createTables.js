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

// Create listings table
const createListingsTable= `
    CREATE TABLE IF NOT EXISTS listings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        street VARCHAR(255),
        city VARCHAR(255),
        postalcode VARCHAR(255),
        province VARCHAR(255),
        country VARCHAR(255),
        primarybedroom VARCHAR(255),
        secondarybedroom VARCHAR(255),
        bathroom VARCHAR(255),
        semibathrooms VARCHAR(255),
        landarea VARCHAR(255),
        shortdescription VARCHAR(255),
        propertytype VARCHAR(255),
        buildingtype VARCHAR(255),
        stories VARCHAR(255),
        community VARCHAR(255),
        neighbourhood VARCHAR(255),
        title VARCHAR(255),
        landareadimension VARCHAR(255),
        builtin VARCHAR(255),
        annualpropertytaxes VARCHAR(255),
        parking VARCHAR(255),
        appliances VARCHAR(255),
        utilities VARCHAR(255),
        water VARCHAR(255),
        flooring VARCHAR(255),
        architecture VARCHAR(255),
        heating VARCHAR(255),
        cooling VARCHAR(255),
        livingroom VARCHAR(255),
        kitchen VARCHAR(255),
        dining VARCHAR(255),
        basement VARCHAR(255),
        basementkitchen VARCHAR(255),
        basementbedroom VARCHAR(255),
        basementdining VARCHAR(255),
        basementliving VARCHAR(255),
        basementroom VARCHAR(255),
        frontage VARCHAR(255),
        landdepth VARCHAR(255)
    )
`;

db.query(createListingsTable, (err, result) => {
    if (err) {
        console.error('Error creating listings table:', err);
    } else {
        console.log('Listings table created or already exists.');
    }
});

db.end();
