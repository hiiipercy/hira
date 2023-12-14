import React from 'react';

export default function Skills(){

    return(
        <section className="skill-section" id="skills">
            <div className="main-text">
                <h2>Skills</h2>
            </div>
        <div className="skill">
        <div class="skill-img">
            <img src="./png.png" alt=""/>
        </div> 
            <div class="technical">
                <div class="skill-box">
                    <span class="title">HTML</span>
                    <div class="skill-bar">
                        <span class="skill-per html">
                            <span class="tooltip">96%</span>
                        </span>
                    </div>
                </div>
                <div class="skill-box">
                    <span class="title">CSS</span>
                    <div class="skill-bar">
                        <span class="skill-per css">
                            <span class="tooltip">93%</span>
                        </span>
                    </div>
                </div>
                <div class="skill-box">
                    <span class="title">JavaScript</span>
                    <div class="skill-bar">
                        <span class="skill-per javascript">
                            <span class="tooltip">80%</span>
                        </span>
                    </div>
                </div>
                <div class="skill-box">
                    <span class="title">React JS</span>
                    <div class="skill-bar">
                        <span class="skill-per reactjs">
                            <span class="tooltip">90%</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}