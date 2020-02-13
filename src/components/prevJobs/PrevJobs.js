import React from "react";
import "./prevJobs.css";

const PrevJobs = () => {
    return(
        <div className="prevJobsWrapper">
            <div className="prevJobsContainer">
                <div className="title">
                    <h4>We offer only, <br/> the highest standards of quality.</h4>
                </div>
                <div className="imgWrapper">
                    <div className="imgContainer">
                        <img src="images/image-2.jpg"/>
                    </div>
                    <div className="imgContainer">
                        <img src="images/image-3.jpg"/>
                    </div>
                    <div className="imgContainer">
                        <img src="images/image-4.jpg"/>
                    </div>
                    <div className="imgContainer">
                        <img src="images/image-5.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrevJobs;