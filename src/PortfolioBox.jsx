import React from "react";

export default function PortfolioBox(props){

    return(
        <div className="PortfolioBox">
                <div className="portfolio-image">
                <img src={props.img} alt=""/>
                </div>
                <div className="portfolio-info">
                    <h3 className="portfolio_title">{props.title}</h3>
                    <p>{props.text}</p>
                    <a href="#"><i class='bx bx-link-external'></i></a>
                </div>
        </div>
    )
}