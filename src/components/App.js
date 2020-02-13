import React from "react";
import ResponsiveDrawer from "./header/Header";
import HomeHero from "./homeHero/HomeHero";
import PrevJobs from "./prevJobs/PrevJobs";
import Services from "./services/Services";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import "../app.css"

const App = () => {
    return (
        <>
            <div className="app">
                <div className="header"><ResponsiveDrawer /></div>
                <div className="homeHero"><HomeHero /></div>
                <div className="prevJobs"><PrevJobs /></div>
                <div className="services"><Services /></div>
                <div className="about"><About /></div>
                <div className="contact"><Contact /></div>

                <div className="footer"><Footer /></div>
            </div>
        </>
    );
}

export default App;