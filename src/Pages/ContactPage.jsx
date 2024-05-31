import './ContactPage.css'
import Header from '../Components/Header/Header'
import Footer from "../Components/Footer/Footer"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const ContactPage = () => {
  return (
    <>
        <Header />

        <section className="contact-section">
          <h1 className='feedback-heading'>Get In Touch</h1>
          <p className='feedback-span'>Send us your message, feedback or ask us your queries</p>
          <Form className='feedback-form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Full Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="text" placeholder="Contact Number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Send us your message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Enter your message here"/>
            </Form.Group>

            
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>

        </section>

        <Footer />
    </>
  )
}

export default ContactPage