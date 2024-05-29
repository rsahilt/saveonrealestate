import './Footer.css'

const Footer = () => {
  return (
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
  )
}

export default Footer