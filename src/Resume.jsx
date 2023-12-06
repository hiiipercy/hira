import React from "react";
import ResumeBox from "./ResumeBox"

export default function Resume(){
    return(
        <div className="section">
            <h1>RESUME</h1>
        <div className="resume">
            <div className="resume_pic">
                <img src="./port.jpg" />
            </div>
            <div className="resume_content">
                <div className="experience"><h2>Work Experience</h2>
                <box_experience />
                </div>
                <div className="education"><h2>Education</h2></div>
            </div>
        </div>
        
        </div>
    )
}