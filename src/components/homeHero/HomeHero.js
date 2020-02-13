import React, { useState, useEffect } from "react";
import { ACCESS_KEY } from "../../config/keys";
import "./hero.css";


// list of colors, darkBlue to lightBlue 
// #052F40
// #0B688C
// #348ABF
// #7EB6D9
// #B3DAF2

const HomeHero = () => {
    const [ image, setImage ] = useState([]);

    useEffect(async () => {
        const baseURL = `https://api.unsplash.com/photos/random?query=builders&client_id=${ACCESS_KEY}`;
        const response = await fetch(baseURL);
        const data = await response.json();
        setImage(data.urls.regular);
    },[])

    return(
        <div className="heroWrapper">
            <img className="heroImage" src={image}/>
            <div className="heroContent">
                
                <i className="logo far fa-building"></i>
                <div className="heroTitle">
                    <h2 className="title">Alan Evans</h2>
                    <h4 className="subtitle">Building Contractors</h4>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;