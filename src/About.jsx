import React from 'react';

export default function About(){

    const [about,setAbout]=React.useState(false)
    function show(){
        setAbout(pre=>!pre);
    }
    return(
        <section className="about" id="about">
            <div className="about-text">
                <h2>About Me</h2>
            </div>
        <div className="about-body" >
            <div className="bio_left">
                <img src="./cv_pic.jpg" alt="about-img" />
            </div>
            <div className="bio_right">
                <h3>A story of good</h3>
                <p>As a passionate and skilled Front-End Developer, I thrive on crafting seamless and engaging user experiences.
With a strong foundation in web technologies, I bring a creative approach to design and a meticulous eye for detail to every project.
My expertise lies in turning design concepts into responsive and interactive interfaces using cutting-edge technologies such as HTML5, CSS3, and JavaScript.
Proficient in front-end framework like React.js, enabling me to build dynamic and scalable applications.
Stay up-to-date with {about ? (<span>the latest industry trends and continually expand my skill set to incorporate emerging technologies.
In the ever-evolving world of front-end development, I am dedicated to continuous learning.</span>) : "" } </p>
                {!about? (<div className="home-btn">
                    <a onClick={show} className="btn">Read More!</a>
                </div>) : ""}
            </div>
        </div>
        </section>
    )
}
