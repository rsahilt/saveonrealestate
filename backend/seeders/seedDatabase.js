import mysql from 'mysql';
import db from '../config/db.js';

// Data to be seeded
const realtors = [
    {
        firstname: 'Mohinder',
        lastname: 'Rehsi',
        dob: '1985-06-15',
        title: 'Senior Realtor',
        licensenumber: 'A123456',
        contactnumber: '123-456-7890',
        street: '123 Main St',
        city: 'Toronto',
        province: 'Ontario',
        country: 'Canada',
        email: 'mohinder.rehsi@gmail.com',
        image: 'mohinder.jpg'
    },
    {
        firstname: 'Fateh',
        lastname: 'Rehsi',
        dob: '1990-08-25',
        title: 'Junior Realtor',
        licensenumber: 'B789012',
        contactnumber: '987-654-3210',
        street: '456 Elm St',
        city: 'Vancouver',
        province: 'British Columbia',
        country: 'Canada',
        email: 'fateh.rehsi@example.com',
        image: 'fateh.jpg'
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

// Create listings table
const createListingsTable = `
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

const listings = [
    {
        street: '123 Maple St',
        city: 'Toronto',
        postalcode: 'M1N 2P3',
        province: 'Ontario',
        country: 'Canada',
        primarybedroom: '3',
        secondarybedroom: '2',
        bathroom: '2',
        semibathrooms: '1',
        landarea: '2500',
        shortdescription: 'Beautiful house in Toronto',
        propertytype: 'House',
        buildingtype: 'Detached',
        stories: '2',
        community: 'Downtown',
        neighbourhood: 'Yorkville',
        title: 'Modern House in Toronto',
        landareadimension: '50x120',
        builtin: '2010',
        annualpropertytaxes: '5000',
        parking: 'Garage',
        appliances: 'Washer, Dryer, Fridge',
        utilities: 'Gas, Water, Electricity',
        water: 'City',
        flooring: 'Hardwood',
        architecture: 'Modern',
        heating: 'Central',
        cooling: 'Air Condition',
        livingroom: '1',
        kitchen: '1',
        dining: '1',
        basement: '1',
        basementkitchen: '1',
        basementbedroom: '1',
        basementdining: '1',
        basementliving: '1',
        basementroom: '1',
        frontage: '60',
        landdepth: '120'
    },
    {
        street: '789 Oak St',
        city: 'Vancouver',
        postalcode: 'V5K 3Z1',
        province: 'British Columbia',
        country: 'Canada',
        primarybedroom: '4',
        secondarybedroom: '3',
        bathroom: '3',
        semibathrooms: '2',
        landarea: '3500',
        shortdescription: 'Luxurious house in Vancouver',
        propertytype: 'House',
        buildingtype: 'Mansion',
        stories: '3',
        community: 'Suburb',
        neighbourhood: 'Kitsilano',
        title: 'Elegant Mansion in Vancouver',
        landareadimension: '75x150',
        builtin: '2015',
        annualpropertytaxes: '8000',
        parking: 'Garage, Driveway',
        appliances: 'Washer, Dryer, Fridge, Dishwasher',
        utilities: 'Gas, Water, Electricity',
        water: 'Mountain',
        flooring: 'Marble',
        architecture: 'Traditional',
        heating: 'Radiant Floor',
        cooling: 'Air Condition',
        livingroom: '1',
        kitchen: '1',
        dining: '1',
        basement: '1',
        basementkitchen: '1',
        basementbedroom: '1',
        basementdining: '1',
        basementliving: '1',
        basementroom: '1',
        frontage: '80',
        landdepth: '160'
    }
];

// Insert data into listings table
const insertListings = `
    INSERT INTO listings (
        street, city, postalcode, province, country,
        primarybedroom, secondarybedroom, bathroom, semibathrooms,
        landarea, shortdescription, propertytype, buildingtype, stories,
        community, neighbourhood, title, landareadimension, builtin,
        annualpropertytaxes, parking, appliances, utilities, water, flooring,
        architecture, heating, cooling, livingroom, kitchen, dining, basement,
        basementkitchen, basementbedroom, basementdining, basementliving,
        basementroom, frontage, landdepth
    ) VALUES ?
`;

const listingValues = listings.map(listing => [
    listing.street,
    listing.city,
    listing.postalcode,
    listing.province,
    listing.country,
    listing.primarybedroom,
    listing.secondarybedroom,
    listing.bathroom,
    listing.semibathrooms,
    listing.landarea,
    listing.shortdescription,
    listing.propertytype,
    listing.buildingtype,
    listing.stories,
    listing.community,
    listing.neighbourhood,
    listing.title,
    listing.landareadimension,
    listing.builtin,
    listing.annualpropertytaxes,
    listing.parking,
    listing.appliances,
    listing.utilities,
    listing.water,
    listing.flooring,
    listing.architecture,
    listing.heating,
    listing.cooling,
    listing.livingroom,
    listing.kitchen,
    listing.dining,
    listing.basement,
    listing.basementkitchen,
    listing.basementbedroom,
    listing.basementdining,
    listing.basementliving,
    listing.basementroom,
    listing.frontage,
    listing.landdepth
]);

db.query(createListingsTable, (err, result) => {
    if (err) {
        console.error('Error creating listings table:', err);
    } else {
        console.log('Listings table created or already exists.');
        
        db.query(insertRealtors, [realtorValues], (err, result) => {
            if (err) {
                console.error('Error inserting realtors:', err);
            } else {
                console.log('Realtors inserted successfully:', result);

                db.query(insertListings, [listingValues], (err, result) => {
                    if (err) {
                        console.error('Error inserting listings:', err);
                    } else {
                        console.log('Listings inserted successfully:', result);
                    }

                    db.end();
                });
            }
        });
    }
});
