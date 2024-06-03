import './ListingDetails.css';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faKitchenSet } from '@fortawesome/free-solid-svg-icons';


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

        <div className="details-images">
            <div className="left-large">big image</div>

            <div className="right-small">
                <div className="top-small">top small image</div>
                <div className="bottom-small">bottom small image</div>
            </div>
            
        </div>

    
        <div className="prop-details first-prop-details" style={{padding:'10px', marginTop:'20px'}}>
            <div className="left-prop-details">
                <h2>$100,000.00</h2>
                <h2 className='details-address'>{listing.street} 
                <br />{listing.city}, {listing.postalcode} {listing.province}, {listing.country}</h2>
            </div>
            <div className="right-prop-details">
                <FontAwesomeIcon icon={faBed} className='faicon faicon-details' /> {listing.primarybedroom} beds &nbsp;&nbsp;
                <FontAwesomeIcon icon={faBath} className='faicon faicon-details' /> {listing.bathroom} baths &nbsp;&nbsp;
                <FontAwesomeIcon icon={faKitchenSet} className='faicon faicon-details' /> {listing.kitchen} kitchen
            </div>
        </div>

        <div className="prop-details" style={{marginTop:'20px', padding:'10px'}} >
            <h4>Listing Description</h4>
            <p>{listing.shortdescription}</p>

            <br />
            <h4>Property Summary</h4>
            <ul className='prop-summary'>
                <li><strong>Property Type</strong> <br />{listing.propertytype}</li>
                <li><strong>Building Type</strong> <br />{listing.buildingtype}</li>
                <li><strong>Stories</strong> <br />{listing.stories}</li>
                <li><strong>Square Footage</strong> <br />{listing.landareadimension}</li>
                <li><strong>Community</strong> <br />{listing.community}</li>
                <li><strong>Neighbourhood</strong> <br />{listing.neighbourhood}</li>
                <li><strong>Title</strong> <br />{listing.title}</li>
                <li><strong>Built in</strong> <br />{listing.builtin}</li>
                <li><strong>Annual Property Taxes</strong> <br />{listing.annualpropertytaxes}</li>
                <li><strong>Parking Type</strong> <br />{listing.parking}</li>
                <li><strong>Bedrooms</strong> <br />{listing.primarybedroom}</li>
                <li><strong>Bathrooms</strong> <br />{listing.bathroom}</li>
                <li><strong>Kitchens</strong> <br />{listing.kitchen}</li>
            </ul>

            <br />

        </div>



        <div className="prop-details" style={{marginTop:'20px', padding:'10px'}} >
            <h4>Building</h4>
            <h5>Bathrooms</h5>
            <ul className='prop-summary'>
                
                <li><strong>Bathroom</strong><br />{listing.bathroom}</li>

                <li><strong>Semi-bathroom</strong><br />{listing.semibathrooms}</li>
            </ul>

            <h5>Interior</h5>
            <ul className='prop-summary'>
                
                <li><strong>Appliances Included</strong><br />{listing.appliances}</li>

                <li><strong>Flooring</strong><br />{listing.flooring}</li>
            </ul>

            <h5>Architecture</h5>
            <ul className='prop-summary'>
                
                <li><strong>Architecture</strong><br />{listing.architecture}</li>
            </ul>

            <h5>Heating & Cooling</h5>
            <ul className='prop-summary'>
                <li><strong>Heating</strong><br />{listing.heating}</li>
                <li><strong>Cooling</strong><br />{listing.cooling}</li>
            </ul>


            <h5>Utilities</h5>
            <ul className='prop-summary'>
                <li><strong>Utlities</strong><br />{listing.utilities}</li>
                <li><strong>Water</strong><br />{listing.water}</li>
            </ul>

            <h5>Parking</h5>
            <ul className='prop-summary'>
                <li><strong>Utlities</strong><br />{listing.parking}</li>
            </ul>

        </div>

        <div className="prop-details" style={{marginTop:'20px', padding:'10px'}} >
            <h4>Measurements</h4>
            <h5>Land Measurements</h5>
            <ul className='prop-summary'>
                <li><strong>Land Area</strong><br />{listing.landarea} sq. feet</li>
            </ul>
        </div>


        <div className="prop-details" style={{marginTop:'20px', padding:'10px'}} >
            <h4>Rooms</h4>
            <h5>Main Level</h5>
            <ul className='prop-summary'>
                <li><strong>Living Room</strong><br />{listing.livingroom}</li>
                <li><strong>Primary Bedroom</strong><br />{listing.primarybedroom}</li>
                <li><strong>Secondary Bedroom</strong><br />{listing.secondarybedroom}</li>
                <li><strong>Kitchen</strong><br />{listing.kitchen}</li>
                <li><strong>Dining</strong><br />{listing.dining}</li>
            </ul>

            <h5>Basement</h5>
            <ul className='prop-summary'>
                <li><strong>Living Room</strong><br />{listing.basementliving}</li>
                <li><strong>Primary Bedroom</strong><br />{listing.basementbedroom}</li>
                <li><strong>Kitchen</strong><br />{listing.basementkitchen}</li>
                <li><strong>Dining</strong><br />{listing.basementdining}</li>
                <li><strong>Recreation Room</strong><br />{listing.basementroom}</li>
            </ul>

        </div>

        <div className="prop-details" style={{marginTop:'20px', padding:'10px'}} >

            <h4>Land</h4>
            <h5>Lot Features</h5>
            <ul className='prop-summary'>
                <li><strong>Frontage</strong><br />{listing.frontage} ft</li>
                <li><strong>Land Depth</strong><br />{listing.landdepth} ft</li>
            </ul>

        </div>
            
    </section>

    <Footer />
    </>
);
};

export default ListingDetails;
