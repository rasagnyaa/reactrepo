import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"
function Navbar() {
    const NavLinkStyle={
        textDecoration:"none",
       
    }
    const liststyle={
    margin:20,

    }
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <div className="container-fluid">
    <ul className="navbar-nav">
        
      {/* <li className="nav-item" style={liststyle}>
      <NavLink to={"/"} style={NavLinkStyle}>Home</NavLink>
      </li> */}
      <li className="nav-item" style={liststyle}>
      <NavLink to={"/"} style={NavLinkStyle}>Home</NavLink>
      </li>

      <li className="nav-item"style={liststyle}>
        <NavLink to={"/about"}style={NavLinkStyle}>About</NavLink>
      </li>

      <li className="nav-item"style={liststyle}>
      <NavLink to={"/setting"}style={NavLinkStyle}>Settings</NavLink>
      </li>

      <li className="nav-item"style={liststyle}>
      <NavLink to={"/contact"}style={NavLinkStyle}>Contacts</NavLink>
      </li>
    </ul>
  </div>
</nav>

  )
}

export default Navbar
