import './Content.css'
import contentimg from '../../assets/contentimg.avif'
import listing1 from '../../assets/listing1.jpeg'
import listing2 from '../../assets/listing2.png'
import listing3 from '../../assets/listing3.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBed} from '@fortawesome/free-solid-svg-icons'
import {faBath} from '@fortawesome/free-solid-svg-icons'
import {faKitchenSet} from '@fortawesome/free-solid-svg-icons'
import realtor1 from '../../assets/realtor1.png'

const Content = () => {
  return (
    <>
        <section>
            <div className='content-container'>
                <div className="content-image">
                    <img src={contentimg} alt="content image" className='contentimage'/>
                </div>

                <div className="content-text">
                    <h1>Search Property in Every Corner of Canada</h1>
                    
                    <p>Welcome to our premier real estate agency, dedicated to unlocking the doors to your dream property in every corner of Canada. Our team of expert agents is committed to guiding you every step of the way. </p>

                    <p>
                        <button className="readmore">Read More</button>
                    </p>
                </div>
            </div>
        
        </section>

        <div className="listings">

            <div className="listings-container">

                <div className='listingsheading'>
                    <h1> &nbsp; TOP LISTINGS</h1>
                </div>

                <div className='listingitems'>

                    <div className="listinghouses">
                        <div className="houseimage">
                            <img src={listing1} alt="listing1" className='houseimg'/>
                        </div>
                        <div className="housedetail">
                            <p>100 Portage Avenue</p>
                            <p>Winnipeg, MB A1B 2C3</p>
                            <p>
                                <FontAwesomeIcon icon={faBed} className='faicon'/> 3beds &nbsp;&nbsp;
                                <FontAwesomeIcon icon={faBath} className='faicon'/> 2 baths &nbsp;&nbsp;
                                <FontAwesomeIcon icon={faKitchenSet} className='faicon'/> 1 Kithcen
                            </p>
                        </div>
                    </div>

                    <div className="listinghouses">
                        <div className="houseimage">
                            <img src={listing2} alt="listing2" className='houseimg'/>
                        </div>
                        <div className="housedetail">
                            <p>100 Portage Avenue</p>
                            <p>Winnipeg, MB A1B 2C3</p>
                            <p>
                                <FontAwesomeIcon icon={faBed} className='faicon'/> 3beds &nbsp;&nbsp;
                                <FontAwesomeIcon icon={faBath} className='faicon'/> 2 baths &nbsp;&nbsp;
                                <FontAwesomeIcon icon={faKitchenSet} className='faicon'/> 1 Kithcen
                            </p>
                        </div>
                    </div>

                    <div className="listinghouses">
                        <div className="houseimage">
                            <img src={listing3} alt="listing3" className='houseimg'/>
                        </div>
                        <div className="housedetail">
                            <p>100 Portage Avenue</p>
                            <p>Winnipeg, MB A1B 2C3</p>
                            <p>
                                <FontAwesomeIcon icon={faBed} className='faicon'/> 3beds &nbsp;&nbsp;
                                <FontAwesomeIcon icon={faBath} className='faicon'/> 2 baths &nbsp;&nbsp;
                                <FontAwesomeIcon icon={faKitchenSet} className='faicon'/> 1 Kithcen
                            </p>
                        </div>
                    </div>

                </div>

                <div className="seeallbtn">
                    <button className="seealllistingbtn">See all listings</button>
                </div>

            </div>

        </div>

        <div className="ourteam">
            <div className="teamheading">
                <h1>Our Team</h1>
            </div>

            <div className="memberimg">
                <div className="teammember">
                    <img src={realtor1} alt="realtor1" className='realtorimage' />
                </div>

                <div className="teammember">
                    <img src={realtor1} alt="realtor1" className='realtorimage' />
                </div>

                <div className="teammember">
                    <img src={realtor1} alt="realtor1" className='realtorimage' />
                </div>

                <div className="teammember">
                    <img src={realtor1} alt="realtor1" className='realtorimage' />
                </div>

                <div className="teammember">
                    <img src={realtor1} alt="realtor1" className='realtorimage' />
                </div>

                <div className="teammember">
                    <img src={realtor1} alt="realtor1" className='realtorimage' />
                </div>

                <div className="teammember">
                    <img src={realtor1} alt="realtor1" className='realtorimage' />
                </div>

                <div className="teammember">
                    <img src={realtor1} alt="realtor1" className='realtorimage' />
                </div>

            </div>
        </div>

        <footer>
            <div className='footercontent'>
                <div className="quicklinks">

                    <div className="footerlinks">
                        <div className="quicklinkscolumn">
                            <p className='footerlinkstitle'>Quicklinks</p> 
                            <ul>
                                <li>Home</li>
                                <li>Contact Us</li>
                                <li>About Us</li>
                                <li>Realtors</li>
                                <li>Email Us</li>
                            </ul>
                        </div>

                        <div className="quicklinkscolumn">
                            <p className='footerlinkstitle'>Legal</p> 
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Terms and Conditions</li>
                                <li>Confidentiality</li>
                                <li>Financial Services</li>
                            </ul>
                        </div>
                    </div>

                    <div className="quicklinkscolumnmap">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.952684365628!2d-97.14923837507541!3d49.91909346298879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea717923d6df41%3A0x7e8d381a0d5400fb!2s235%20McGregor%20St%2C%20Winnipeg%2C%20MB%20R2W%204W5!5e0!3m2!1sen!2sca!4v1716733713069!5m2!1sen!2sca" width="100%" height="250px" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
                <div className="copyright">
                    <p><sup>&copy;</sup>2024, Save On Real Estate Rehsi Group, Winnipeg, MB, CANADA</p>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Content