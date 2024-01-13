import React from 'react';
import Scroll from 'react-scroll';
const Link = Scroll.Link


export default function Header(){
    let [bar,setBar] = React.useState(false);
    function toogle(){
        setBar(pre => !pre)
    }
 

    return (
        <header className='header'>
            <div className="logo">
                <span>H</span>ira.
            </div>
            <ul id='navbar' onClick={toogle} className={bar ?
            "#navbar open" : "#navbar"}>
                <li className="nav-item">
                <Link activeClassName="active"
                      to="home" 
                      spy={true} 
                      smooth={true}
                      duration={300}
                      
                       >Home</Link>
                </li>
                <li className="nav-item">
                <Link activeClassName="active"
                      to="about" 
                      spy={true} 
                      smooth={true}
                      duration={300}
                      >About</Link>
                </li>
                <li className="nav-item">
                <Link activeClassName="active"
                      to="skills" 
                      spy={true} 
                      smooth={true}
                      duration={300}
                     >Skills</Link>
                </li>
                <li className="nav-item">
                <Link to="services"      
                      activeClassName="active"
                      spy={true} 
                      smooth={true}
                      duration={300}
                   >Services</Link>
                </li>
                <li  className="nav-item">
                <Link activeClassName="active"
                      to="portfolio"       
                      spy={true} 
                      smooth={true}
                      duration={300}
                     >Portfolio</Link>
                </li>
                <li  className="nav-item">
                <Link activeClassName="active"
                      to="contact"      
                      spy={true} 
                      smooth={true}
                      duration={300} 
                     >Contact</Link>
                </li>
            </ul>
            <div id="menu-icon" onClick={toogle} class={bar ? "bx bx-x" : "bx bx-menu"}>
            </div>
        </header>
    )
}

