import './ListingPage.css'
import Header from '../Components/Header/Header'
import Footer from "../Components/Footer/Footer"
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBed} from '@fortawesome/free-solid-svg-icons'
import {faBath} from '@fortawesome/free-solid-svg-icons'
import {faKitchenSet} from '@fortawesome/free-solid-svg-icons'
import listing1 from '../assets/listing1.jpeg'

const ListingPage = () => {

  const[listings, setListings] = useState([])

  useEffect(() => {
    const fetchAllListings = async () => {
      try {
        const res = await axios.get("http://localhost:8080/listings")
        setListings(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllListings()
  }, []);
  return (
    <>
        <Header />

        <section className="listing-section">
          {
            listings.map(listing=>(
              <Card key={listing.id} style={{ margin: '20px', textAlign:'center', width: '300px', borderRadius: '0px', border: '1px solid #d1e2e3' }} className='listing-card'>
                <Card.Img style={{ borderRadius: '0px', height: '220px', margin:'0' }} variant="top" src={listing1} />
                <Card.Body>
                  <Card.Title className='listing-title' style={{margin:'0', padding:'0', fontSize:'0.9em', fontWeight:'700'}}>{listing.street}, {listing.city}, {listing.postalcode}, {listing.province}, {listing.country}</Card.Title>
                  <Card.Text style={{paddingTop:'5px'}}>
                    <FontAwesomeIcon icon={faBed} className='faicon'/> {listing.primarybedroom} beds &nbsp;&nbsp;
                    <FontAwesomeIcon icon={faBath} className='faicon'/> {listing.bathroom} baths &nbsp;&nbsp;
                    <FontAwesomeIcon icon={faKitchenSet} className='faicon'/> {listing.kitchen} kitchen
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          }
          
        </section>

        <Footer />
    </>
  )
}

export default ListingPage