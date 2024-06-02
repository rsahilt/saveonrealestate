import './ListingDetails.css';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ListingDetails = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const fetchListingDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/listings/${id}`);
        setListing(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchListingDetails();
  }, [id]);

  if (!listing) {
    return <div>ERROR 404: PAGE NOT FOUND</div>;
  }

  return (
    <>
      <Header />

      <section className="details-section">
        <h2>{listing.title}</h2>
        <p>{listing.shortdescription}</p>
        <ul>
          <li>Address: {listing.street}, {listing.city}, {listing.province}, {listing.country}</li>
          <li>Bedrooms: {listing.primarybedroom}</li>
          <li>Bathrooms: {listing.bathroom}</li>
          <li>Kitchens: {listing.kitchen}</li>
          <li>Land Area: {listing.landarea}</li>
          <li>Property Type: {listing.propertytype}</li>
          <li>Building Type: {listing.buildingtype}</li>
          <li>Stories: {listing.stories}</li>
          <li>Community: {listing.community}</li>
          <li>Neighbourhood: {listing.neighbourhood}</li>
          <li>Annual Property Taxes: {listing.annualpropertytaxes}</li>
          <li>Parking: {listing.parking}</li>
          <li>Appliances: {listing.appliances}</li>
          <li>Utilities: {listing.utilities}</li>
          <li>Water: {listing.water}</li>
          <li>Flooring: {listing.flooring}</li>
          <li>Architecture: {listing.architecture}</li>
          <li>Heating: {listing.heating}</li>
          <li>Cooling: {listing.cooling}</li>
          <li>Living Room: {listing.livingroom}</li>
          <li>Dining Room: {listing.dining}</li>
          <li>Basement: {listing.basement}</li>
        </ul>
      </section>

      <Footer />
    </>
  );
};

export default ListingDetails;
