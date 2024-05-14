import react, { useEffect, useState } from 'react';
import './main.css';
import './common.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function Portfolio() {
    return (
        <div className="container py-4" style={{ marginTop: '55px' }}>
            <div className="d-flex justify-content-center">
                <div className="bg-secondary text-white portfolio-title rounded">
                    My Work
                </div>
            </div>
            <div className="py-2">
                <div className="text-center">
                    Some of the noteworthy projects I have built:
                </div>
            </div>
            <div className='work-margin-div'>
                <div class="card card-margin-div border-0 shadow">
                    <div className="custom-card-flex">
                        <div className="custom-card-bg custom-card-width custom-card-order-log-1 custom-card-border-left">
                            <div className='portfolio-img-div'>
                                <img src="./image/car-rent.png" alt="car-rent" className="rounded" style={{ width: '100%' }}></img>
                            </div>
                        </div>
                        <div className="custom-card-color custom-card-width custom-card-order-log-2 custom-card-border-right">
                            <div className='portfolio-desc-div'>
                                <p className='h4'><strong>Car-Rent</strong></p>
                                <p>
                                    The car-rent React app simplifies the vehicle rental process, allowing users to browse,
                                    select, and book cars online. With features like detailed car listings, reservation
                                    management, and secure payment processing, it offers a convenient platform for users
                                    to rent vehicles for their travel needs.
                                </p>
                                <p className='d-flex flex-wrap gap-2'>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        React
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        Node.js
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        TypeScript
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        Mysql
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        Figma
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        Html
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        Css
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        Bootstrap
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        Git
                                    </div>
                                </p>
                                <a href='#' data-bs-toggle="tooltip" data-bs-placement="top" title="Open UI"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-margin-div border-0 shadow">
                    <div className="custom-card-flex">
                        <div className="custom-card-color custom-card-width custom-card-order-log-2 custom-card-border-left">
                            <div className='portfolio-desc-div'>
                                <p className='h4'><strong>Portfolio</strong></p>
                                <p>
                                    The React portfolio project showcases my skills and experiences in web development, incorporating HTML, CSS, and Bootstrap
                                    for responsive design and layout. Leveraging React's component-based architecture, it provides an intuitive user interface
                                    for exploring my professional journey and accomplishments. Furthermore, it integrates functionality to send emails directly
                                    from the portfolio, enhancing communication and networking opportunities. Through this project, I demonstrate proficiency
                                    in modern web technologies while presenting a polished and interactive representation of my resume and portfolio.
                                </p>
                                <p className='d-flex flex-wrap gap-2'>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        Html
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        Css
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        Bootstrap
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        React
                                    </div>
                                </p>
                                <a href='https://comfy-dusk-71030c.netlify.app/' target='_blank' data-bs-toggle="tooltip" data-bs-placement="top" title="Open UI"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                            </div>
                        </div>
                        <div className="custom-card-bg custom-card-width custom-card-order-log-1 custom-card-border-right">
                            <div className='portfolio-img-div'>
                                <img src="./image/portfolio.png" alt="portfolio" className="rounded" style={{ width: '100%' }}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-margin-div border-0 shadow">
                    <div className="custom-card-flex">
                        <div className="custom-card-bg custom-card-width custom-card-order-log-1 custom-card-border-left">
                            <div className='portfolio-img-div'>
                                <img src="./image/crud.png" alt="crud" className="rounded" style={{ width: '100%' }}></img>
                            </div>
                        </div>
                        <div className="custom-card-color custom-card-width custom-card-order-log-2 custom-card-border-right ">
                            <div className='portfolio-desc-div'>
                                <p className='h4'><strong>Crud with Local Storage</strong></p>
                                <p>
                                    Implementing CRUD operations with local storage in a React project empowers users to seamlessly
                                    manage data within the application. By eliminating the need for a server dependency, users can
                                    effortlessly add, view, edit, and delete items. Leveraging the browser's local storage API ensures
                                    data persistence while maintaining a lightweight and efficient solution. This approach enhances
                                    user interaction and streamlines data management within our React application, providing a
                                    smoother and more responsive experience overall.
                                </p>
                                <p className='d-flex flex-wrap gap-2'>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        React
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        Html
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        Css
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        Git
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        Local Storage
                                    </div>
                                </p>
                                <a href='https://peppy-vacherin-2e3ade.netlify.app/' target='_blank' data-bs-toggle="tooltip" data-bs-placement="top" title="Open UI"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-margin-div border-0 shadow">
                    <div className="custom-card-flex">
                        <div className="custom-card-color custom-card-width custom-card-order-log-2 custom-card-border-left">
                            <div className='portfolio-desc-div'>
                                <p className='h4'><strong>Resume Builder</strong></p>
                                <p>
                                    The resume builder project in PHP facilitates the creation of professional resumes by providing
                                    customizable templates and form fields for personal and professional details. Users can input
                                    their information, select from various design options, and generate downloadable resumes in PDF
                                    or other formats. Additionally, the project may offer features such as resume preview, editing,
                                    and storage for future updates.
                                </p>
                                <p className='d-flex flex-wrap gap-2'>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        PHP
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        Html
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        Css
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        Mysql
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        phpmyAdmin
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        bootstrap
                                    </div>
                                </p>
                                <a href='#' data-bs-toggle="tooltip" data-bs-placement="top" title="Open UI"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                            </div>
                        </div>
                        <div className="custom-card-bg custom-card-width custom-card-order-log-1 custom-card-border-right">
                            <div className='portfolio-img-div'>
                                <img src="./image/about.jpg" alt="valora" className="rounded" style={{ width: '100%' }}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card card-margin-div border-0 shadow">
                    <div className="custom-card-flex">
                        <div className="custom-card-bg custom-card-width custom-card-order-log-1 custom-card-border-left">
                            <div className='portfolio-img-div'>
                                <img src="./image/about.jpg" alt="valora" className="rounded" style={{ width: '100%' }}></img>
                            </div>
                        </div>
                        <div className="custom-card-color custom-card-width custom-card-order-log-2 custom-card-border-right">
                            <div className='portfolio-desc-div'>
                                <p className='h4'><strong>Online Job Portal System</strong></p>
                                <p>
                                    The Online Job Portal System in PHP serves as a platform connecting job seekers with employers,
                                    offering functionalities such as job posting, resume uploading, search and filter options,
                                    application tracking, and notifications. Users can create profiles, apply for jobs, and manage
                                    their applications, while employers can post job listings, review resumes, and communicate
                                    with candidates efficiently.
                                </p>
                                <p className='d-flex flex-wrap gap-2'>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        PHP
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        Html
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        Css
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        Mysql
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        phpmyAdmin
                                    </div>
                                    <div className="bg-secondary text-white portfolio-title rounded">
                                        bootstrap
                                    </div>
                                </p>
                                <a href='#' data-bs-toggle="tooltip" data-bs-placement="top" title="Open UI"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;