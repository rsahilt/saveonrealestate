import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTachometer, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';
import './Admin.css';

function Sidebar() {
  return (
    <div className='admin-sidebar'>
      <Nav className="flex-column admin-sidebar-list">
        <Nav.Item style={{borderRadius:'0'}}>
          <Nav.Link href="#" className="admin-link text-black">
            <FontAwesomeIcon icon={faTachometer} className="me-2 admin-faicon" /> Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="admin-link text-black">
            <FontAwesomeIcon icon={faHome} className="me-2 admin-faicon" /> Listings
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="admin-link text-black">
            <FontAwesomeIcon icon={faUser} className="me-2 admin-faicon" /> Realtors
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="admin-link text-black">
            <FontAwesomeIcon icon={faEnvelope} className="me-2 admin-faicon" /> Inbox
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Sidebar;
