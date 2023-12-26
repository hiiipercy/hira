import React from "react";
import PortfolioBox from "./PortfolioBox"

export default function Portfolio(){

    return(
        <section className="portfolio">
            <h2>Latest Projects</h2>
            <div className="portfolio_body">
                    <PortfolioBox 
                        img="./quora.png"
                        title="Quora for College"
                        text="An online educational platform"
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
                        img="./to-do.png"
                        title="web5"
                        link="https://to-do-app-no82.vercel.app/"
                        />

            </div>
        </section>
    )
}
