import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './footer.css';
import './common.css';

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
                            <p className="footerfontDiv footer-hover-link"><a onClick={() => nevigate('/')}>Home</a></p>
                            <p className="footerfontDiv footer-hover-link"><a onClick={() => nevigate('/about')}>About</a></p>
                            <p className="footerfontDiv footer-hover-link"><a onClick={() => nevigate('/portfolio')}>Portfolio</a></p>
                            <p className="footerfontDiv footer-hover-link"><a onClick={() => nevigate('/contactus')}>Contact</a></p>
                            {/* </ul> */}
                        </div>
                        <div class="footer-col">
                            <h4>Contact</h4>
                            {/* <hr /> */}
                            <p className="footerfontDiv"><FontAwesomeIcon icon={faHome} /> Surat, Gujarat, India</p>
                            <p className="footerfontDiv footer-hover"><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:deep.k.dungarani@gmail.com">deep.k.dungarani@gmail.com</a></p>
                            <p className="footerfontDiv footer-hover"><FontAwesomeIcon icon={faMobile} /> <a href="tel:+919016065685">+91 90160 65685</a></p>
                        </div>
                        <div class="footer-col">
                            <h4>follow us</h4>
                            <div class="social-links">
                                <a href="https://www.facebook.com/share/CX9rsnqcW9qhtss2/?mibextid=qi2Omg" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" className="custom-icon-color footer-hover" /></a>
                                {/* <a href="https://twitter.com/" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" className="custom-icon-color" /></a> */}
                                <a href="https://www.instagram.com/deep_dungarani_23?igsh=dnRybmNzajdmcHo1" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" className="custom-icon-color footer-hover" /></a>
                                <a href="https://www.linkedin.com/in/deep-dungarani-4b036a194/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" className="custom-icon-color footer-hover" /></a>
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