import React from "react";
import './body.css';
import './common.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function About() {
    return (
        <>
            <div className="container py-4" style={{ marginTop: '54px' }}>
                <div className="d-flex justify-content-center">
                    <div className="bg-secondary text-white about-title rounded">
                        About Me
                    </div>
                </div>
                <div className="py-4">
                    <div className="gap-4 custom-card-flex" style={{ width: '100%' }}>
                        <div className="d-flex align-items-center aboutfleximgdiv">
                            <img src="./image/about.png" style={{ width: '100%' }}></img>
                        </div>
                        <div className="aboutflexDiv">
                            <p>
                                I'm a passionate web developer in React.js & Node.js. I am very enthusiastic about bringing the
                                technical and visual aspects of digital products to life. User experience, pixel perfect design,
                                and writing clear, readable, highly performant code matters to me.
                            </p>
                            <p>
                                I began my journey as a web developer in 2019, and since then, I've continued to grow and evolve
                                as a developer, taking on new challenges and learning the latest technologies along the way. Now,
                                in my career, 1.5 years after starting my web development journey, I'm building cutting-edge web
                                applications using modern technologies such as React, Node.js, TypeScript, Jquery, Tallwindess,
                                PHP, Javascript and much more.
                            </p>
                            <p>
                                I'm someone who embraces progressive thinking and finds fulfillment in being involved in every
                                stage of product development, starting from the initial ideation to the final implementation.
                            </p>
                            <p>
                                Finally,some quick bits about me.
                            </p>
                            <p>
                                <ul style={{ listStyle: 'disc' }}>
                                    <li>B.Tech Computer Engineering</li>
                                    <li>Full time web developer</li>
                                </ul>
                            </p>
                            <p>
                                One more thing, I'm also open to freelance opportunities, so don't hesitate to reach out.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="py-4 about-education-div">
                    <div className="d-flex justify-content-center">
                        <div className="bg-secondary text-white about-title rounded">
                            Education
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="py-3 custom-card-flex-column gap-3">
                            <div className="card p-3 custom-card-color border-0 shadow custom-card-font custom-card-width-33">
                                <span><strong>Bachelor Degree</strong></span>
                                <div>P P Savani University</div>
                                <div className="d-flex justify-content-between about-font-set">
                                    <span>06/2019 - 03/2023</span>
                                    <span>7.66 CGPA</span>
                                </div>
                                <div className="about-font-set">
                                    Course
                                    <ul style={{ listStyle: 'disc' }}>
                                        <li>B. Tech Computer Engineering</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card p-3 custom-card-color border-0 shadow custom-card-font custom-card-width-33">
                                <span><strong>XII (HSC)</strong></span>
                                <div>Shree Sharda Vidhyamandir</div>
                                <div className="d-flex justify-content-between about-font-set">
                                    <span>06/2018 - 05/2019</span>
                                    <span>62.85%</span>
                                </div>
                                <div className="about-font-set">
                                    Course
                                    <ul style={{ listStyle: 'disc' }}>
                                        <li>Science</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card p-3 custom-card-color border-0 shadow custom-card-font custom-card-width-33">
                                <span><strong>X (SSC)</strong></span>
                                <div>Akshar Jyoti Highschool</div>
                                <div className="d-flex justify-content-between about-font-set">
                                    <span>06/2016 - 05/2017</span>
                                    <span>60.5%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="custom-page-bg p-3">
                <div className="container">
                    <div className="py-4">
                        <div className="d-flex justify-content-center">
                            <div className="bg-secondary text-white about-title rounded">
                                Skills
                            </div>
                        </div>
                        <div className="py-2">
                            <div className="text-center">
                                The Skills, Tools and technologies I am really good at:
                            </div>
                        </div>
                        <div className="skillimgset">
                            <div className="skillimgdiv">
                                <div>
                                    <div className="imgboxdiv">
                                        <img src="./image/html.png" alt="html" style={{ width: '100%' }}></img>
                                    </div>
                                    <div className="text-center about-img-title-div">Html</div>
                                </div>
                            </div>
                            <div className="skillimgdiv">
                                <div>
                                    <div className="imgboxdiv">
                                        <img src="./image/css.png" alt="css" style={{ width: '100%' }}></img>
                                    </div>
                                    <div className="text-center about-img-title-div">Css</div>
                                </div>
                            </div>
                            <div className="skillimgdiv">
                                <div>
                                    <div className="imgboxdiv">
                                        <img src="./image/react.png" alt="react" style={{ width: '100%' }}></img>
                                    </div>
                                    <div className="text-center about-img-title-div">React</div>
                                </div>
                            </div>
                            <div className="skillimgdiv">
                                <div>
                                    <div className="imgboxdiv">
                                        <img src="./image/node.png" alt="node" style={{ width: '100%' }}></img>
                                    </div>
                                    <div className="text-center about-img-title-div">Node.Js</div>
                                </div>
                            </div>
                            <div className="skillimgdiv">
                                <div>
                                    <div className="imgboxdiv">
                                        <img src="./image/php.png" alt="php" style={{ width: '100%' }}></img>
                                    </div>
                                    <div className="text-center about-img-title-div">PHP</div>
                                </div>
                            </div>
                            <div className="skillimgdiv">
                                <div>
                                    <div className="imgboxdiv">
                                        <img src="./image/typescript.png" alt="typescript" style={{ width: '100%' }}></img>
                                    </div>
                                    <div className="text-center about-img-title-div">Typescript</div>
                                </div>
                            </div>
                            <div className="skillimgdiv">
                                <div>
                                    <div className="imgboxdiv">
                                        <img src="./image/Jquery.png" alt="Jquery" style={{ width: '100%' }}></img>
                                    </div>
                                    <div className="text-center about-img-title-div">Jquery</div>
                                </div>
                            </div>
                            <div className="skillimgdiv">
                                <div>
                                    <div className="imgboxdiv">
                                        <img src="./image/bootstrap.png" alt="bootstrap" style={{ width: '100%' }}></img>
                                    </div>
                                    <div className="text-center about-img-title-div">Bootstrap</div>
                                </div>
                            </div>
                            <div className="skillimgdiv">
                                <div>
                                    <div className="imgboxdiv">
                                        <img src="./image/figma.png" alt="figma" style={{ width: '100%' }}></img>
                                    </div>
                                    <div className="text-center about-img-title-div">Figma</div>
                                </div>
                            </div>
                            <div className="skillimgdiv">
                                <div>
                                    <div className="imgboxdiv">
                                        <img src="./image/javascript.png" alt="javascript" style={{ width: '100%' }}></img>
                                    </div>
                                    <div className="text-center about-img-title-div">Javascript</div>
                                </div>
                            </div>
                            <div className="skillimgdiv">
                                <div>
                                    <div className="imgboxdiv">
                                        <img src="./image/mysql.png" alt="mysql" style={{ width: '100%' }}></img>
                                    </div>
                                    <div className="text-center about-img-title-div">Mysql</div>
                                </div>
                            </div>
                            <div className="skillimgdiv">
                                <div>
                                    <div className="imgboxdiv">
                                        <img src="./image/Tailwind.png" alt="Tailwind" style={{ width: '100%' }}></img>
                                    </div>
                                    <div className="text-center about-img-title-div">Tailwind</div>
                                </div>
                            </div>
                            <div className="skillimgdiv">
                                <div>
                                    <div className="imgboxdiv">
                                        <img src="./image/git.png" alt="git" style={{ width: '100%' }}></img>
                                    </div>
                                    <div className="text-center about-img-title-div">Git</div>
                                </div>
                            </div>
                            <div className="skillimgdiv">
                                <div>
                                    <div className="imgboxdiv">
                                        <img src="./image/chatgpt.png" alt="chatgpt" style={{ width: '100%' }}></img>
                                    </div>
                                    <div className="text-center about-img-title-div">Chatgpt</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="py-4">
                    <div className="d-flex justify-content-center">
                        <div className="bg-secondary text-white about-title rounded">
                            Experience
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="text-center">
                            Here is quick summary of my most recent experiences:
                        </div>
                    </div>
                    <div>
                        <div class="card about-card-div custom-card-color border-0 shadow custom-card-font">
                            <div className="py-4 px-4 custom-card-flex-between gap-4">
                                <div className="custom-width-20-100 custom-card-order-log-1">
                                    <img src="./image/valora.png" alt="valora" class="img-fluid mx-auto d-block" style={{ width: '50%' }}></img>
                                </div>
                                <div className="custom-card-width-60 custom-card-order-log-3">
                                    <p><strong>Associate React Developer</strong></p>
                                    <ul style={{ listStyle: 'disc' }}>
                                        <li>As an Associate React JS Developer, my primary responsibility is to contribute
                                            to the creation and maintenance of web applications utilizing the React JavaScript
                                            library. I focus on developing user-friendly and responsive interfaces, adhering to
                                            coding standards and best practices while being mentored by senior engineers.</li>
                                        <li>I actively collaborate with team members to comprehend project requirements and
                                            translate them into technical specifications.</li>
                                        <li> Employing recognized coding conventions, I strive to write clear, efficient, and maintainable code.</li>
                                        <li> I played a pivotal role in the successful development and launch of Blocksscan web application's
                                            using React JS, thereby enhancing the overall user experience.</li>
                                    </ul>
                                </div>
                                <div className="custom-width-20-50 custom-card-order-log-2">June 2023 - Present</div>
                            </div>
                        </div>
                        <div class="card about-card-div custom-card-color border-0 shadow custom-card-font">
                            <div className="py-4 px-4 custom-card-flex-between gap-4">
                                <div className="custom-width-20-100 custom-card-order-log-1">
                                    <img src="./image/instance-it.png" alt="instance-it" class="img-fluid mx-auto d-block" style={{ width: '50%' }}></img>
                                </div>
                                <div className="custom-card-width-60 custom-card-order-log-3">
                                    <p><strong>Associate PHP Developer</strong></p>
                                    <ul style={{ listStyle: 'disc' }}>
                                        <li>An Associate PHP Developer contributes to the development of PHP-based web
                                            applications, typically in an entry-level role within the software development
                                            field. They are responsible for various tasks including designing, building,
                                            testing, deploying, and providing support for web applications and services.
                                            Successful execution of these responsibilities necessitates close collaboration
                                            with senior developers, software architects, and project managers.</li>
                                        <li>Coding and Development</li>
                                        <li>Testing and Debugging</li>
                                        <li>Successful Project Delivery</li>
                                        <li>Problem-Solving and Innovation</li>
                                    </ul>
                                </div>
                                <div className="custom-width-20-50 custom-card-order-log-2">December 2022 - May 2023</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-4">
                    <div className="d-flex justify-content-center">
                        <div className="bg-secondary text-white about-title rounded">
                            Certificates
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="text-center">
                            Here's a summary of my certificates, highlighting key accomplishments and areas of expertise:
                        </div>
                    </div>
                    <div>
                        <div class="card about-card-div border-0 shadow">
                            <div className="custom-card-flex">
                                <div className="custom-card-bg custom-card-width-40 custom-card-order-log-1 custom-card-border-left">
                                    <div className='portfolio-img-div'>
                                        <img src="./image/react_hakerrank.png" alt="react_hakerrank" style={{ width: '100%', borderRadius: '10px' }}></img>
                                    </div>
                                </div>
                                <div className="custom-card-color custom-card-width-60 custom-card-order-log-2 custom-card-border-right">
                                    <div className='portfolio-desc-div'>
                                        <p className='d-flex justify-content-between'><strong className="h4">React (Basic)</strong><span>May 2024 - May 2024</span></p>
                                        <p>
                                        In this React (Basic) course, I've successfully built and managed React components, effectively utilizing props and 
                                        state to pass and manage data within the application. Additionally, I've demonstrated proficiency in implementing event 
                                        handling and utilizing React Hooks for managing component logic and side effects, showcasing a strong foundation in 
                                        React development fundamentals.
                                        </p>
                                        <p className='d-flex flex-wrap gap-2'>
                                            <div className="bg-secondary text-white portfolio-title rounded">
                                                React
                                            </div>
                                            <div className="bg-secondary text-white portfolio-title rounded">
                                                Bootstrap
                                            </div>
                                            <div className="bg-secondary text-white portfolio-title rounded">
                                                Html
                                            </div>
                                            <div className="bg-secondary text-white portfolio-title rounded">
                                                Css
                                            </div>
                                        </p>
                                        <a href='./image/react_hakerrank.png' target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Open Certificate"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card about-card-div border-0 shadow">
                            <div className="custom-card-flex">
                                <div className="custom-card-bg custom-card-width-40 custom-card-order-log-1 custom-card-border-left">
                                    <div className='portfolio-img-div'>
                                        <img src="./image/deep_chatgpt.png" alt="deep_chatgpt" style={{ width: '100%', borderRadius: '10px' }}></img>
                                    </div>
                                </div>
                                <div className="custom-card-color custom-card-width-60 custom-card-order-log-2 custom-card-border-right">
                                    <div className='portfolio-desc-div'>
                                        <p className='d-flex justify-content-between'><strong className="h4">ChatGpt For Beginners</strong><span>June 2023 - June 2023</span></p>
                                        <p>
                                            In the "ChatGPT for Beginners" course at Great Learning Corporate Academy, I achieved proficiency in fundamental concepts of
                                            chatbot development, including natural language processing techniques and conversational interface design. With a comprehensive
                                            understanding of chatbot deployment and maintenance best practices, I successfully completed practical projects demonstrating
                                            my ability to create effective and engaging chatbot solutions. Additionally, I acquired expertise in leveraging advanced
                                            features for personalized user experiences, ensuring seamless integration with enterprise systems. This course equipped me
                                            with the skills necessary to innovate and excel in the dynamic field of conversational AI.
                                        </p>
                                        <a href='./image/deep_chatgpt.png' target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Open Certificate"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card about-card-div border-0 shadow">
                            <div className="custom-card-flex">
                                <div className="custom-card-bg custom-card-width-40 custom-card-order-log-1 custom-card-border-left">
                                    <div className='portfolio-img-div'>
                                        <img src="./image/web-devlopment-certificate-complete.png" alt="web-devlopment-certificate-complete" style={{ width: '100%', borderRadius: '10px' }}></img>
                                    </div>
                                </div>
                                <div className="custom-card-color custom-card-width-60 custom-card-order-log-2 custom-card-border-right">
                                    <div className='portfolio-desc-div'>
                                        <p className='d-flex justify-content-between'><strong className="h4">Web Devlopment</strong><span>June 2022 - August 2022</span></p>
                                        <p>
                                            Internshala's web development course offers comprehensive training in HTML, CSS, JavaScript, and other essential web
                                            technologies. Participants learn to create responsive and interactive websites, gaining hands-on experience through
                                            projects and assignments. Key accomplishments include proficiency in front-end and back-end development, understanding
                                            of web frameworks like React and Angular, and the ability to deploy websites using platforms like Heroku or Netlify.
                                            Areas of expertise include web design, database management and web security principles.
                                        </p>
                                        <p className='d-flex flex-wrap gap-2'>
                                            <div className="bg-secondary text-white portfolio-title rounded">
                                                HTML
                                            </div>
                                            <div className="bg-secondary text-white portfolio-title rounded">
                                                CSS
                                            </div>
                                            <div className="bg-secondary text-white portfolio-title rounded">
                                                Bootstrap
                                            </div>
                                            <div className="bg-secondary text-white portfolio-title rounded">
                                                DBMS
                                            </div>
                                            <div className="bg-secondary text-white portfolio-title rounded">
                                                PHP
                                            </div>
                                            <div className="bg-secondary text-white portfolio-title rounded">
                                                JS
                                            </div>
                                            <div className="bg-secondary text-white portfolio-title rounded">
                                                React
                                            </div>
                                        </p>
                                        <a href='./image/web-devlopment-certificate-complete.png' target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Open Certificate"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card about-card-div border-0 shadow">
                            <div className="custom-card-flex">
                                <div className="custom-card-bg custom-card-width-40 custom-card-order-log-1 custom-card-border-left">
                                    <div className='portfolio-img-div'>
                                        <img src="./image/about.jpg" alt="about" style={{ width: '100%', borderRadius: '10px' }}></img>
                                    </div>
                                </div>
                                <div className="custom-card-color custom-card-width-60 custom-card-order-log-2 custom-card-border-right">
                                    <div className='portfolio-desc-div'>
                                        <p className='d-flex justify-content-between'><strong className="h4">Training Certificate</strong><span>June 2022 - June 2022</span></p>
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
                                        </p>
                                        <a href='./image/about.jpg' target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Open Certificate"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card about-card-div border-0 shadow">
                            <div className="custom-card-flex">
                                <div className="custom-card-bg custom-card-width-40 custom-card-order-log-1 custom-card-border-left">
                                    <div className='portfolio-img-div'>
                                        <img src="./image/about.jpg" alt="about" style={{ width: '100%', borderRadius: '10px' }}></img>
                                    </div>
                                </div>
                                <div className="custom-card-color custom-card-width-60 custom-card-order-log-2 custom-card-border-right">
                                    <div className='portfolio-desc-div'>
                                        <p className='d-flex justify-content-between'><strong className="h4">Training on Web Development</strong><span>June 2022 - August 2022</span></p>
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
                                        </p>
                                        <a href='./image/about.jpg' target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Open Certificate"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card about-card-div border-0 shadow">
                            <div className="custom-card-flex">
                                <div className="custom-card-bg custom-card-width-40 custom-card-order-log-1 custom-card-border-left">
                                    <div className='portfolio-img-div'>
                                        <img src="./image/html_certificate.png" alt="html_certificate" style={{ width: '100%', borderRadius: '10px' }}></img>
                                    </div>
                                </div>
                                <div className="custom-card-color custom-card-width-60 custom-card-order-log-2 custom-card-border-right">
                                    <div className='portfolio-desc-div'>
                                        <p className='d-flex justify-content-between'><strong className="h4">Html</strong><span>May 2022 - June 2022</span></p>
                                        <p>
                                            Sololearn's HTML course offers a comprehensive introduction to HTML, covering fundamental concepts such as tags, attributes,
                                            and document structure. Through interactive lessons and quizzes, learners acquire practical skills in creating web pages and
                                            understanding HTML's role in web development.
                                        </p>
                                        <p>
                                            Key Accomplishments:
                                            <ul style={{ listStyle: 'disc' }}>
                                                <li>Mastering HTML syntax and structure.</li>
                                                <li>Understanding and effectively utilizing semantic HTML elements.</li>
                                                <li>Demonstrating proficiency in creating responsive web pages using HTML.</li>
                                                <li>Completing interactive lessons and quizzes with high accuracy and comprehension.</li>
                                            </ul>
                                        </p>
                                        <a href='./image/html_certificate.png' target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Open Certificate"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card about-card-div border-0 shadow">
                            <div className="custom-card-flex">
                                <div className="custom-card-bg custom-card-width-40 custom-card-order-log-1 custom-card-border-left">
                                    <div className='portfolio-img-div'>
                                        <img src="./image/responsive-certificate.png" alt="responsive-certificate" style={{ width: '100%', borderRadius: '10px' }}></img>
                                    </div>
                                </div>
                                <div className="custom-card-color custom-card-width-60 custom-card-order-log-2 custom-card-border-right">
                                    <div className='portfolio-desc-div'>
                                        <p className='d-flex justify-content-between'><strong className="h4">Responsive Web Design</strong><span>August 2022 - September 2022</span></p>
                                        <p>
                                            Sololearn's Responsive Web Design course offers a comprehensive exploration of designing websites that adapt seamlessly to various screen sizes
                                            and devices. Through interactive lessons and practical exercises, learners gain expertise in CSS media queries, flexible layouts, and responsive
                                            design principles, empowering them to create engaging and accessible web experiences for modern users.
                                        </p>
                                        <p>
                                            Key Accomplishments:
                                            <ul style={{ listStyle: 'disc' }}>
                                                <li>Mastery of CSS media queries for designing responsive layouts.</li>
                                                <li>Proficiency in creating flexible and adaptable web designs across different devices.</li>
                                                <li>Understanding of best practices in responsive design principles, such as fluid grids and flexible images.</li>
                                                <li>Ability to optimize user experiences by ensuring websites are accessible and functional on mobile, tablet, and desktop devices.</li>
                                            </ul>
                                        </p>
                                        <a href='./image/responsive-certificate.png' target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Open Certificate"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card about-card-div border-0 shadow">
                            <div className="custom-card-flex">
                                <div className="custom-card-bg custom-card-width-40 custom-card-order-log-1 custom-card-border-left">
                                    <div className='portfolio-img-div'>
                                        <img src="./image/about.jpg" alt="about" style={{ width: '100%', borderRadius: '10px' }}></img>
                                    </div>
                                </div>
                                <div className="custom-card-color custom-card-width-60 custom-card-order-log-2 custom-card-border-right">
                                    <div className='portfolio-desc-div'>
                                        <p className='d-flex justify-content-between'><strong className="h4">Course on Computer Concepts (CCC)</strong><span>April 2019 - July 2019</span></p>
                                        <p>
                                            The car-rent React app simplifies the vehicle rental process, allowing users to browse,
                                            select, and book cars online. With features like detailed car listings, reservation
                                            management, and secure payment processing, it offers a convenient platform for users
                                            to rent vehicles for their travel needs.
                                        </p>
                                        <p className='d-flex flex-wrap gap-2'>
                                            <div className="bg-secondary text-white portfolio-title rounded">
                                                Word
                                            </div>
                                        </p>
                                        <a href='./image/about.jpg' target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="Open Certificate"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;