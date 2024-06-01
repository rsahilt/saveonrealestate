import './TeamPage.css'
import Header from '../Components/Header/Header'
import Footer from "../Components/Footer/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import axios from 'axios'

import realtor1 from '../assets/realtor1.png'

const TeamPage = () => {

  const[realtors, setRealtors] = useState([]);

  useEffect(()=>{
    const fetchAllRealtors = async () =>{
      try{
        const res = await axios.get("http://localhost:8080/realtors")
        setRealtors(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchAllRealtors()
  })

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
            {
              realtors.map(realtor=>(
                <Card key={realtor.id} style={{ width: '500px', borderRadius:'0' }} className='realtor-card' data-aos="fade-in">
                  <Row noGutters>
                    <Col md={4}>
                      <Card.Img src={realtor1} alt="Fateh Rehsi" style={{height:'100%', borderRadius:'0'}}/>
                    </Col>
                    <Col md={8}>
                      <Card.Body>
                        <Card.Title style={{textTransform:'uppercase', letterSpacing:'1px',padding:'0', margin:'0'}}><strong>{realtor.firstname} {realtor.lastname}</strong></Card.Title>
                        <Card.Text style={{padding:'0', margin:'0'}}>{realtor.title}</Card.Text>
                        <Card.Text style={{paddingTop:'5px'}}><strong>Licence No.: </strong>{realtor.licensenumber}
                          <br /><strong>Contact No.: </strong> {realtor.contactnumber}
                          <br /><strong>Office Address:</strong>{realtor.street}, {realtor.city}, {realtor.province}, {realtor.country}
                        </Card.Text>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              ))
            }
          </div>
        </section>

        <Footer />
    </>
  )
}

export default TeamPage