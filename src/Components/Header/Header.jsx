import './Header.css'
import sorslogo from '../../assets/sorslogo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'



const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={sorslogo} alt="company logo" className='companylogo'/>
        </div>

        <div className="title">
            <div className="top-title">
                <h1>SAVE ON</h1>
            </div>
            <div className="btm-title">
                <h2 className='btm-title-h2'>Real Estate Rehsi Group</h2>
            </div>
        </div>


        <Navbar expand="lg" style={{paddingLeft:'50px'}}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>
                        <Nav.Link as={Link} to="/showroom" className="nav-item">About</Nav.Link>
                        <Nav.Link as={Link} to="/products" className="nav-item">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/about-us" className="nav-item">Our Team</Nav.Link>
                        <Nav.Link as={Link} to="/contact-us" className="nav-item">Listing</Nav.Link>
                    </Nav>

                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2 searchbox"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button className='searchbuttonhome' type="submit">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </Button>
                            </Col>
                        </Row>
                </Form>

                </Navbar.Collapse>
            </Container>
        </Navbar>


    </header>
  )
}

export default Header