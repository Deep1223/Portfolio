import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './footer.css';

function Footer() {
    const nevigate = useNavigate();

    return (
        <div className="footerpadDiv">
            <footer class="footer">
                <div class="footcontainer">
                    <div class="rowDiv">
                        <div class="footer-col">
                            <h4>Portfolio</h4>
                            {/* <hr /> */}
                            <p className="footerfontDiv">
                                Let's Build Something Amazing Together! Reach out to discuss your project 
                                and how we can bring your vision to life
                            </p>
                        </div>
                        <div class="footer-col">
                            <h4>Companey</h4>
                            {/* <ul> */}
                            <p className="footerfontDiv"><a onClick={() => nevigate('/')}>Home</a></p>
                            <p className="footerfontDiv"><a onClick={() => nevigate('/about')}>About</a></p>
                            <p className="footerfontDiv"><a onClick={() => nevigate('/portfolio')}>Portfolio</a></p>
                            <p className="footerfontDiv"><a onClick={() => nevigate('/contactus')}>Contact</a></p>
                            {/* </ul> */}
                        </div>
                        <div class="footer-col">
                            <h4>Contact</h4>
                            {/* <hr /> */}
                            <p className="footerfontDiv"><FontAwesomeIcon icon={faHome} /> Surat, Gujarat, India</p>
                            <p className="footerfontDiv"><FontAwesomeIcon icon={faEnvelope} /> deep.k.dungarani@gmail.com</p>
                            <p className="footerfontDiv"><FontAwesomeIcon icon={faMobile} /> +91 90160 65685</p>
                        </div>
                        <div class="footer-col">
                            <h4>follow us</h4>
                            <div class="social-links">
                                <a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" className="custom-icon-color" /></a>
                                <a href="https://twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" className="custom-icon-color" /></a>
                                <a href="https://instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" className="custom-icon-color" /></a>
                                <a href="https://linkedin.com/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" className="custom-icon-color" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center" style={{marginBottom: '-20px'}}>© 2024 | Designed and Coded by Deep Dungarani</div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;