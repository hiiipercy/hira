import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header(){
  
    return (
        <nav className='header'>
            <div className="logo">
                <span>H</span>ira.
            </div>
            <ul className="nav-menu">
                <li className="nav-item">
                <NavLink activeClassName="active"
                      to="/" 
                      spy={true} 
                      smooth={true} 
                       >Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink activeClassName="active"
                      to="/about" 
                      spy={true} 
                      smooth={true} 
                      >About</NavLink>
                </li>
                <li className="nav-item">
                <NavLink activeClassName="active"
                      to="/skills" 
                      spy={true} 
                      smooth={true} 
                     >Skills</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/services"      
                      activeClassName="active"
                      spy={true} 
                      smooth={true} 
                   >Services</NavLink>
                </li>
                <li  className="nav-item">
                <NavLink activeClassName="active"
                      to="/portfolio"       
                      spy={true} 
                      smooth={true} 
                     >Portfolio</NavLink>
                </li>
                <li  className="nav-item">
                <NavLink activeClassName="active"
                      to="/contact"      
                      spy={true} 
                      smooth={true} 
                     >Contact</NavLink>
                </li>
            </ul>
            <div id="menu-icon" class='bx bx-menu'>
            </div>
        </nav>
    )
}

