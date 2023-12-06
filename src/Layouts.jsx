import React, { useEffect, useRef } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Services from './Services';



export default function Layouts(){
    return(
        <div>
            <Home/>
            <About />
            <Skills />
            <Services />
            <Portfolio />
            <Contact />
        </div>
    )
}