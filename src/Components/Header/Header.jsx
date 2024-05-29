import './Header.css';
import sorslogo from '../../assets/sorslogo.png';
import { Navbar, Container, Nav, Form, Row, Col, Button } from 'react-bootstrap';
import { Link, useLocation  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



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
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>About</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Nav.Link>
                            <Nav.Link as={Link} to="/team" className={`nav-item ${location.pathname === '/team' ? 'active' : ''}`}>Our Team</Nav.Link>
                            <Nav.Link as={Link} to="/listings" className={`nav-item ${location.pathname === '/listings' ? 'active' : ''}`}>Listing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>

                <div>
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
                </div>

            </Container>
            
        </Navbar>

    </header>
  )
}

export default Header