import mysql from 'mysql';
import db from '../config/db.js';

// Data to be seeded
const realtors = [
    {
        firstname: 'John',
        lastname: 'Doe',
        dob: '1985-06-15',
        title: 'Senior Realtor',
        licensenumber: 'A123456',
        contactnumber: '123-456-7890',
        street: '123 Main St',
        city: 'Toronto',
        province: 'Ontario',
        country: 'Canada',
        email: 'john.doe@example.com',
        image: 'john.jpg'
    },
    {
        firstname: 'Jane',
        lastname: 'Smith',
        dob: '1990-08-25',
        title: 'Junior Realtor',
        licensenumber: 'B789012',
        contactnumber: '987-654-3210',
        street: '456 Elm St',
        city: 'Vancouver',
        province: 'British Columbia',
        country: 'Canada',
        email: 'jane.smith@example.com',
        image: 'jane.jpg'
    }
];

// Insert data into realtors table
const insertRealtors = `
    INSERT INTO realtors (
        firstname, lastname, dob, title, licensenumber, contactnumber,
        street, city, province, country, email, image
    ) VALUES ?
`;

const realtorValues = realtors.map(realtor => [
    realtor.firstname,
    realtor.lastname,
    realtor.dob,
    realtor.title,
    realtor.licensenumber,
    realtor.contactnumber,
    realtor.street,
    realtor.city,
    realtor.province,
    realtor.country,
    realtor.email,
    realtor.image
]);

db.query(insertRealtors, [realtorValues], (err, result) => {
    if (err) {
        console.error('Error inserting realtors:', err);
    } else {
        console.log('Realtors inserted successfully:', result);
    }

    db.end();
});
