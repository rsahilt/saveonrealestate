import './ListingPage.css';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faKitchenSet } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import listing1 from '../assets/listing1.jpeg';

const ListingPage = () => {
  const [listings, setListings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllListings = async () => {
      try {
        const res = await axios.get('http://localhost:8080/listings');
        setListings(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllListings();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <>
      <Header />
      <div style={{ backgroundColor: '#fefbf5' }}>
        <h1
          style={{
            textTransform: 'uppercase',
            fontWeight: '700',
            fontSize: '2.1em',
            paddingTop: '60px',
            marginBottom: '0',
            textAlign: 'center'
          }}
        >
          All Listings
        </h1>
      </div>

      <section className="listing-section">
        {listings.map(listing => (
          <Card
            key={listing.id}
            style={{
              margin: '20px',
              textAlign: 'center',
              width: '300px',
              borderRadius: '0px',
              border: '1px solid #d1e2e3'
            }}
            className='listing-card'
            onClick={() => handleCardClick(listing.id)}
          >
            <Card.Img
              style={{ borderRadius: '0px', height: '220px', margin: '0' }}
              variant="top"
              src={listing1}
            />
            <Card.Body>
              <Card.Title
                className='listing-title'
                style={{ margin: '0', padding: '0', fontSize: '0.9em', fontWeight: '700' }}
              >
                {listing.street}, {listing.city}, {listing.postalcode}, {listing.province}, {listing.country}
              </Card.Title>
              <Card.Text style={{ paddingTop: '5px' }}>
                <FontAwesomeIcon icon={faBed} className='faicon' /> {listing.primarybedroom} beds &nbsp;&nbsp;
                <FontAwesomeIcon icon={faBath} className='faicon' /> {listing.bathroom} baths &nbsp;&nbsp;
                <FontAwesomeIcon icon={faKitchenSet} className='faicon' /> {listing.kitchen} kitchen
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </section>

      <Footer />
    </>
  );
};

export default ListingPage;
