import React from "react";

export default function ServicesBox(props){
    const [about,setAbout]=React.useState(false)
    
    function show(){
        setAbout(pre=>!pre);
    }

    return(
        <div className="ServicesBox">
            <i class={props.img}></i>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            {about?(<p>{props.show}</p>) : ""}
            {!about? (<div onClick={show} className="home-btn service-btn">
                {props.butt}
            </div>) : ""}
        </div>
    )
}