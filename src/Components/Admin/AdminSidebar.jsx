import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTachometer, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Nav, Dropdown, Button } from 'react-bootstrap';
import './Admin.css';

function AdminSidebar() {
  return (
    <div className='admin-sidebar'>
      <Nav className="flex-column admin-sidebar-list">
        <Nav.Item style={{borderRadius:'0'}}>
          <Nav.Link href="#" className="admin-link text-black">
            <FontAwesomeIcon icon={faTachometer} className="me-2 admin-faicon" /> Dashboard
          </Nav.Link>
          
        </Nav.Item>

        <Nav.Item>
          <Dropdown>
            <Dropdown.Toggle variant="link" style={{textDecoration:'none'}} id="dropdown-basic" className="admin-link text-black">
              <FontAwesomeIcon icon={faHome} className="me-2 admin-faicon" /> Listings
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#action/1">View All Listing</Dropdown.Item>
              <Dropdown.Item href="#action/2">Create New Listing</Dropdown.Item>
              <Dropdown.Item href="#action/3">Update/Delete Listing</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Item>

        <Nav.Item>
          <Dropdown>
              <Dropdown.Toggle variant="link" style={{textDecoration:'none'}} id="dropdown-basic" className="admin-link text-black">
                <FontAwesomeIcon icon={faHome} className="me-2 admin-faicon" /> Realtors
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#action/1">View All Realtors</Dropdown.Item>
                <Dropdown.Item href="#action/2">Add New Realtor</Dropdown.Item>
                <Dropdown.Item href="#action/3">Edit/Remove Realtor</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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

export default AdminSidebar;
