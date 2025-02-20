import React from 'react'
import { Link, useLocation } from 'react-router-dom'


export const Navbar = () => {
    let location = useLocation();
    
    return (
        <>        
<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">CSI-VIT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav" >
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active": "" }`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/team"?"active": "" }`} to="/team">Team</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/projects"?"active": "" }`} to="/projects">Our Projects</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/contact"?"active": "" }`} to="/contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}
