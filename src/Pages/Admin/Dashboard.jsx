import React from 'react'
import AdminNavbar from '../../Components/Admin/AdminNavbar'
import Sidebar from '../../Components/Admin/AdminSidebar'
import './Dashboard.css'


const Dashboard = () => {
  return (
    <>
        <AdminNavbar />

        <section className="admin-dashboard">
          <div className="sidebar-left">
            <Sidebar />
          </div>

          <div className="dashboard-content"></div>
        </section>

    </>
  )
}

export default Dashboard