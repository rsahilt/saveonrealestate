import './TeamPage.css'
import Header from '../Components/Header/Header'
import Footer from "../Components/Footer/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react'

import realtor1 from '../assets/realtor1.png'

const TeamPage = () => {
  useEffect(() => {
    AOS.init({
        duration: 1000,
    });
  }, [])
  return (
    <>
        <Header />

        <section className='team-section'>
          <div>
            <h1 className='realtor-heading'>Our Team</h1>
          </div>
          <div className="card-container">
            <Card style={{ width: '500px', borderRadius:'0' }} className='realtor-card' data-aos="fade-in">
              <Row noGutters>
                <Col md={4}>
                  <Card.Img src={realtor1} alt="Fateh Rehsi" style={{height:'100%', borderRadius:'0'}}/>
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title style={{textTransform:'uppercase', letterSpacing:'1px',padding:'0', margin:'0'}}><strong>Fateh Rehsi</strong></Card.Title>
                    <Card.Text style={{padding:'0', margin:'0'}}>Realtor</Card.Text>
                    <Card.Text style={{paddingTop:'5px'}}><strong>Licence No.:</strong>
                      <br /><strong>Contact No.:</strong>
                      <br /><strong>Office Address:</strong>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>

            <Card style={{ width: '500px', borderRadius:'0' }} className='realtor-card' data-aos="fade-in">
              <Row noGutters>
                <Col md={4}>
                  <Card.Img src={realtor1} alt="Fateh Rehsi" style={{height:'100%', borderRadius:'0'}}/>
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title style={{textTransform:'uppercase', letterSpacing:'1px',padding:'0', margin:'0'}}><strong>Fateh Rehsi</strong></Card.Title>
                    <Card.Text style={{padding:'0', margin:'0'}}>Realtor</Card.Text>
                    <Card.Text style={{paddingTop:'5px'}}><strong>Licence No.:</strong>
                      <br /><strong>Contact No.:</strong>
                      <br /><strong>Office Address:</strong>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>

            <Card style={{ width: '500px', borderRadius:'0' }} className='realtor-card' data-aos="fade-in">
              <Row noGutters>
                <Col md={4}>
                  <Card.Img src={realtor1} alt="Fateh Rehsi" style={{height:'100%', borderRadius:'0'}}/>
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title style={{textTransform:'uppercase', letterSpacing:'1px',padding:'0', margin:'0'}}><strong>Fateh Rehsi</strong></Card.Title>
                    <Card.Text style={{padding:'0', margin:'0'}}>Realtor</Card.Text>
                    <Card.Text style={{paddingTop:'5px'}}><strong>Licence No.:</strong>
                      <br /><strong>Contact No.:</strong>
                      <br /><strong>Office Address:</strong>
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </div>
        </section>

        <Footer />
    </>
  )
}

export default TeamPage