import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function NavScrollExample() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#254866', width: '100vw' }}>
      <Container fluid>
        <Navbar.Brand href="#" className="text-white">Save On Real Estate</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex ms-auto admin-searchbar-input">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='admin-search-btn'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;