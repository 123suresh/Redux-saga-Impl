import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

function Header() {
  return (
      <nav className='navBar'>
        <ul className='link'>
          <li>
            <Link to="/" className={
              window.location.pathname === "/"
              ? "active-link"
              : "link-li"
            }>
              Key Highlights</Link>
          </li>
          <li>
            <Link to="/webgis"
            className={
              window.location.pathname === "/webgis"
              ? "active-link"
              : "link-li"
            }
            >Web GIS and Data Visualization</Link>
          </li>
          <li>
            <Link to="/training">Training & Capacity Building</Link>
          </li>
          <li>
            <Link to="/survey">Surveying and GIS Mapping</Link>
          </li>
          <li>
            <Link to="/disaster">Disaster Risk Resilience</Link>
          </li>
        </ul>
      </nav>
  )
}

export default Header