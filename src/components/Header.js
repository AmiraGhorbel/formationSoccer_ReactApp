import React from 'react'
import {Link} from 'react-router-dom'
import { NavLink } from "react-router-dom";
export default function Header() {
  let activeStyle = {
    textDecoration: "underline red",
    backgroundColor:"#000",


  };

  let activeClassName = "underline";
  return (
    <div>
      <header className="site-navbar py-4" role="banner">
            <div className="container">
              <div className="d-flex align-items-center">
                <div className="site-logo">
                  <Link to="/">
                    <img src="assets/images/logo.png" alt="Logo" />
                  </Link>
                </div>
                <div className="ml-auto">
                  <nav className="site-navigation position-relative text-right" role="navigation">
                    <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                      <li><NavLink to="/" className="nav-link" style={({ isActive }) =>isActive ? activeStyle : undefined }>Home</NavLink></li>
                      <li><NavLink to="/matchs" className="nav-link"  style={({ isActive }) =>isActive ? activeStyle : undefined }>Matches</NavLink></li>
                      <li><NavLink to="/player" className="nav-link" style={({ isActive }) =>isActive ? activeStyle : undefined }>Players</NavLink></li>
                      <li><NavLink to="/blog" className="nav-link" style={({ isActive }) =>isActive ? activeStyle : undefined }>Blog</NavLink></li>
                      <li><NavLink to="/contact" className="nav-link" style={({ isActive }) =>isActive ? activeStyle : undefined }>Contact</NavLink></li>
                      <li><NavLink to="/admin" className="nav-link" style={({ isActive }) =>isActive ? activeStyle : undefined }>Admin</NavLink></li>
                      <li><NavLink to="/addpla" className="nav-link" style={({ isActive }) =>isActive ? activeStyle : undefined }>AddPlayer</NavLink></li>
                      <li><NavLink to="/aff" className="nav-link" style={({ isActive }) =>isActive ? activeStyle : undefined }>Afficher</NavLink></li>
                    </ul>
                  </nav>
                  <Link to="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white"><span className="icon-menu h3 text-white" /></Link>
                </div>
              </div>
            </div>
          </header>
    </div>
  )
}
