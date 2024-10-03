import React, { useRef } from "react";
import './contactus.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMobile, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5m9vhsn', 'template_eqx2j81', form.current, 'c1OQgDn0gOsr_EzhA')
            .then((result) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Your Data has been sent successfully.',
                }).then((result) => {
                    document.getElementById("contact-form").reset();
                })
            }, (error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!"
                });
            });
    };

    return (
        <div className="container-fluid py-4" style={{ marginTop: '55px' }}>
            <div className="row justify-content-center">
                <div className="col-12 bg-secondary text-white contact-title rounded text-center">
                    Contact Us
                </div>
            </div>
            <div className="row py-2">
                <div className="col-12 text-center" style={{ padding: '0px 15px' }}>
                    <p className="px-5">If you believe my skills and experience align with your company's needs, I'd be thrilled to explore potential opportunities with you. Please don't hesitate to reach out if you think I'd be a good fit for your team.</p>
                </div>
            </div>

            <div className="row py-2">
                <div className="col-lg-6 order-lg-2">
                    <div className="get-in-touch-div px-5 py-4">
                        <form id="contact-form" ref={form} onSubmit={sendEmail}>
                            <h3 className="mb-4">Send Message</h3>
                            <div className="form-group py-2">
                                <input type="text" required name="user_name" className="form-control form-border shadow-none custom-form-text" placeholder="Full Name" />
                            </div>

                            <div className="form-group py-2">
                                <input type="email" required name="user_email" className="form-control form-border shadow-none custom-form-text" placeholder="Email" />
                            </div>

                            <div className="form-group py-2">
                                <textarea required name="message" className="form-control form-border shadow-none custom-form-text" placeholder="Type your Message..."></textarea>
                            </div>

                            <div className="form-group py-2">
                                <input type="submit" value="Send" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6 order-lg-1">
                    <div className="address-div px-5 align-self-center">
                        <div className="info-div">
                            <div>
                                <FontAwesomeIcon icon={faLocationDot} size="2x" />
                            </div>
                            <div>
                                <h6 className="info-margin">Address</h6>
                                <span>Katargam, Surat, 395004</span>
                            </div>
                        </div>
                        <div className="info-div">
                            <div>
                                <FontAwesomeIcon icon={faMobile} size="2x" />
                            </div>
                            <div>
                                <h6 className="info-margin">Mobile No</h6>
                                <span>+91 90160 65685</span>
                            </div>
                        </div>
                        <div className="info-div">
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                            </div>
                            <div>
                                <h6 className="info-margin">Email</h6>
                                <span>deep.k.dungarani@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
