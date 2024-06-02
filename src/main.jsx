import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AboutPage from './Pages/AboutPage.jsx'
import ContactPage from './Pages/ContactPage.jsx'
import TeamPage from './Pages/TeamPage.jsx'
import ListingPage from './Pages/ListingPage.jsx'
import ListingDetails from './Pages/ListingDetails.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/team",
    element: <TeamPage />,
  },
  {
    path: "/listings",
    element: <ListingPage />,
  },
  {
    path: "/details/:id",
    element: <ListingDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
)

