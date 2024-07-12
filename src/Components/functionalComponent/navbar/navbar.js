import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const linkStyle={
        textDecoration:"none",
       
    }
    const liststyle={
    margin:20,

    }
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
        
      <li className="nav-item" style={liststyle}>
      <Link to={"/"} style={linkStyle}>Home</Link>
      </li>

      <li className="nav-item"style={liststyle}>
        <Link to={"/about"}style={linkStyle}>About</Link>
      </li>

      <li className="nav-item"style={liststyle}>
      <Link to={"/setting"}style={linkStyle}>Settings</Link>
      </li>

      <li className="nav-item"style={liststyle}>
      <Link to={"/contact"}style={linkStyle}>Contacts</Link>
      </li>
    </ul>
  </div>
</nav>

  )
}

export default Navbar
