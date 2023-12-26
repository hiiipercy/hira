import React from "react";
import PortfolioBox from "./PortfolioBox"

export default function Portfolio(){

    return(
        <section className="portfolio">
            <h2>Latest Projects</h2>
            <div className="portfolio_body">
                    <PortfolioBox 
                        img="./quora.png"
                        title="Business Card"
                        text="Simple business card single page"
                        link="https://quoraforcollege.vercel.app/"
                    />
                    <PortfolioBox
                        img="./task_2.png"
                        title="Airbnb"
                        text="Simple Airbnb single page"
                        link="https://sample-portfolio-sooty.vercel.app/"
                    />
    
                <PortfolioBox 
                        img="./travel_journal.png"
                        title="Travel Journal" 
                        text="Simple Travel journal page"
                        link="https://travel-journal-umber.vercel.app/"
                    />
                    <PortfolioBox
                        img="./business_card.png"
                        title="web5"
                        link=""
                        />
                
                <PortfolioBox 
                        img="./dev.jpg"
                        title="web1" 
                        link=""
                    />
                    <PortfolioBox
                        img="./dev.jpg"
                        title="web2"
                        link=""
                    />
            </div>
        </section>
    )
}
