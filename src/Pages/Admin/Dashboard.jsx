import React from 'react'
import AdminNavbar from '../../Components/Admin/AdminNavbar'
import Sidebar from '../../Components/Admin/AdminSidebar'
import './Dashboard.css'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';


const Dashboard = () => {
  return (
    <>
        <AdminNavbar />

        <section className="admin-dashboard">
          <div className="sidebar-left">
            <Sidebar />
          </div>

          <div className="dashboard-content">
            <h1 style={{fontWeight:'500', fontSize:'1.5em', padding:'10px'}}>Welcome to Dashboard</h1>

            <div className="admin-summary">
              <Card style={{ width: '18rem', marginRight:'25px' }}>
                <Card.Body>
                  <Card.Title>Listings</Card.Title>
                  <Card.Text>
                    <FontAwesomeIcon icon={faHome} style={{fontSize: '2em'}}/>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem', marginRight:'25px' }}>
                <Card.Body>
                  <Card.Title>Realtors</Card.Title>
                  <Card.Text>
                    <FontAwesomeIcon icon={faUser} style={{fontSize: '2em'}}/>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: '18rem', marginRight:'25px' }}>
                <Card.Body>
                  <Card.Title>Feedbacks</Card.Title>
                  <Card.Text>
                    <FontAwesomeIcon icon={faUser} style={{fontSize: '2em'}}/>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </section>

    </>
  )
}

export default Dashboard