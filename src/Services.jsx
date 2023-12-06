import React, { useEffect, useRef } from 'react';
import ServicesBox from "./ServicesBox";

export default function Services(){

  const [about,setAbout]=React.useState(false)
    function show(){
        setAbout(pre=>!pre);
    }

    return(
    
      <section className="services_main" id="services">
          <h2>Services</h2>
          <div className="services">
            <ServicesBox
              img="bx bx-layer"
              title="Web Designer"
              text="Write clean, maintainable, and efficient HTML, CSS and REACT.JS "
              show="code to implement the design and functionality of web apps."
              butt= {<a className="btn">Read More!</a>}
            />
            <ServicesBox
              img="bx bx-code-alt"
              title="Developer"
              text="Work with front-end frameworks and libraries such as React to "
              show="build scalable and modular web applications."
              butt= {<a  className="btn">Read More!</a>}
              />
            <ServicesBox
              img="bx bx-desktop"
              title="Testing"
              text="Conduct testing, including unit testing and integration testing, "
              show="to identify and fix issues early in the development process."
              butt= {<a  className="btn">Read More!</a>}
            />
          </div>
        </section>
    )
}