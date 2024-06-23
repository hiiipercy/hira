import React from "react";
import Typical from 'react-typical';


export default function Home(){

    return(
           <home className="home" id="home">
                <div className="home-content">
                    <h3>Hello! It's me</h3>
                    <h1>Eshaq Miah</h1>
                        <div className="change-text">
                            <h3>And I'm a&nbsp;</h3>
                            <h3>
                                <Typical className="typical"
                                loop={Infinity}
                                wrapper="p"
                                steps={[ 
                                    'Web Designer',3000,
                                    'UX/UI Developer',3000,
                                    'Graphics Designer',3000,
                                    'Laravel Developer', 3000,
                                ]}
                            />
                            </h3>
                        </div>
                    <p className="text">I'm a dedicated Software developer 🧔, and I'm all about JavaScript and its handy libraries and frameworks 💻.
                     I use code to tackle real-life problems and add that extra sparkle ✨.</p>
                    <div className="info-box">
                        <div className="mail-info">
                            <h5>Email:</h5>
                            <span>ishaqmiah@yahoo.com</span>
                        </div>
                        <div className="behance-info">
                            <h5>Phone:</h5>
                            <span>+8801568476837</span>
                        </div>
                    </div>
                    <div className="home-btn">
                        <a href="./ESHAQ_MIAH_resume.pdf" download="Eshaq_Miah" className="btn">Download CV</a>
                        <a href="contact" target="_blank" className="btn">Hire Me Now!</a>
                    </div>
                    <div className="social-icon">
                        <a href="https://wa.me/qr/4VDXOU6RWSGYN1" target="_blank"><i class='bx bxl-whatsapp'></i></a>
                        <a href="https://github.com/hiiipercy" target="_blank"><i class='bx bxl-github' ></i></a>
                        <a href="https://www.linkedin.com/in/hiiipercy/" target="_blank"><i class='bx bxl-linkedin' ></i></a>
                        <a href="https://www.instagram.com/leo__hira/" target="_blank"><i class='bx bxl-instagram'></i></a>
                    </div>
                </div>    
                <div className="home-image">
                    <div className="image-box">
                        <img src="./cover.jpeg" alt=""/>
                    </div>
                </div>
            </home>
    )
}
