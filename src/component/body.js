import React from "react";
import './body.css';
import { useNavigate } from "react-router-dom";

function Body() {
    const navigate = useNavigate();

    // const handledownloadresume = () => {
    //     const pdfUrl = './image/deep.pdf';
    //     const anchor = document.createElement('a');
    //     anchor.href = pdfUrl;
    //     anchor.download = 'deep_resume.pdf';

    //     document.body.appendChild(anchor);
    //     anchor.click();
    //     document.body.removeChild(anchor);
    // }

    return (
        <div className="container" style={{ marginTop: '55px' }}>
            <div className="row py-3">
                <div className="col-lg-5 order-lg-2 align-self-center d-flex justify-content-center">
                    <div style={{ width: '70%' }}>
                        <img src="./image/body.jpeg" alt="profile" style={{ width: '100%', borderRadius: '10px' }} />
                    </div>
                </div>
                <div className="col-lg-7 order-lg-1 d-flex py-4 gap-4">
                    <div className="align-self-center">
                        <div>
                            <p className="subtitle">HELLO</p>
                            <h1 className="title">
                                I'm <span>Deep<br />a</span> Web Developer
                            </h1>
                            <p>
                                As a web developer proficient in React.js, Node.js, and PHP, I specialize
                                in crafting exceptional digital experiences that are not only fast, accessible,
                                and visually appealing, but also responsive to the diverse needs of users.
                                With over 1.5 years of experience, my passion for web development remains as
                                fervent as ever. Additionally, I'm well-versed in OpenAI tools like ChatGPT,
                                leveraging their capabilities to enhance user interactions and deliver
                                personalized experiences.
                            </p>
                            <p style={{ paddingTop: "20px" }}>
                                <div className="py-1 d-flex gap-2"><span><i class="bi bi-geo-alt"></i></span><span>Surat, India</span></div>
                                {/* <div className="py-1 d-flex gap-2"><span><i class="bi bi-circle-fill text-success"></i></span><span>Available for new job</span></div> */}
                                <div className="py-1 d-flex gap-2"><span class="bs-dot h_green align-self-center"></span><span>Available for new job</span></div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Body;
