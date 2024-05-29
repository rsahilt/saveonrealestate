import './Header.css';
import sorslogo from '../../assets/sorslogo.png';
import { Navbar, Container, Nav, Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                            <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" className="nav-item">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="nav-item">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/team" className="nav-item">Our Team</Nav.Link>
                            <Nav.Link as={Link} to="/listings" className="nav-item">Listing</Nav.Link>
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