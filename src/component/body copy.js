import React from "react";
import './body.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

function Body() {
    const nevigate = useNavigate();
    return(
        <div className="BodyContainerDiv mainDiv">
            <div className="portfoDiv">
                <h5 className="bodynameDiv">Web Devloper</h5>
                <h1>Hello,<span className="bodydesDiv">I'm Deep</span></h1>
                <p>Hi, i m Deep, professional web devloper with 1 year 
                    <br/>of experience. Need any help?</p>
                <br />
                <button className="btnDiv">Download Resume</button>
            
                <div className="iconDiv">
                    <a href="#" className="faiconDiv">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                    <a href="#" className="faiconDiv">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="#" className="faiconDiv">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="#" className="faiconDiv">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Body;