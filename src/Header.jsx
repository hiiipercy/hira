import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header(){
    let [bar,setBar] = React.useState(false);
    function toogle(){
        setBar(pre => !pre)
    }
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };  

    return (
        <header className='header'>
            <div className="logo">
                <span>H</span>ira.
            </div>
            <ul id='navbar' onClick={toogle} className={bar ?
            "#navbar open" : "#navbar"}>
                <li className="nav-item">
                <NavLink activeClassName="active"
                      to="/" 
                      spy={true} 
                      smooth={true}
                      onClick={scrollToTop}
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
            <div id="menu-icon" onClick={toogle} class={bar ? "bx bx-x" : "bx bx-menu"}>
            </div>
        </header>
    )
}

