import React from "react";
import PortfolioBox from "./PortfolioBox"

export default function Portfolio(){

    return(
        <section className="portfolio">
            <h2>Latest Projects</h2>
            <div className="portfolio_body">
                    <PortfolioBox 
                        img="./business_card.png"
                        title="Business Card"
                        text="Simple business card single page"
                    />
                    <PortfolioBox
                        img="./task_2.png"
                        title="Airbnb"
                        text="Simple Airbnb single page" 
                    />
    
                <PortfolioBox 
                        img="./travel_journal.png"
                        title="Travel Journal" 
                        text="Simple Travel journal page"
                    />
                    <PortfolioBox
                        img="./business_card.png"
                        title="web5"
                        />
                
                <PortfolioBox 
                        img="./dev.jpg"
                        title="web1" 
                    />
                    <PortfolioBox
                        img="./dev.jpg"
                        title="web2" 
                    />
            </div>
        </section>
    )
}