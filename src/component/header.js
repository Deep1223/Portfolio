import React, { useState, useEffect } from "react";
import './main.css';
import { useNavigate, useLocation } from "react-router-dom";

function Header({ toggleTheme, theme }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [isNavbaritemOpen, setIsNavbaritemOpen] = useState(false);
    const [activeNavItem, setActiveNavItem] = useState(null);

    const handledownloadresume = () => {
        const pdfUrl = './image/resume_deep_dungarani_2024.pdf';
        const anchor = document.createElement('a');
        anchor.href = pdfUrl;
        anchor.download = 'deep_resume.pdf';

        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }

    const handleNavbarToggle = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const handleNavbaritemToggle = () => {
        setIsNavbaritemOpen(!isNavbaritemOpen);
    };

    useEffect(() => {
        const pageName = location.pathname.split('/').pop();
        setActiveNavItem(pageName);
    }, [location.pathname]);

    const handleNavItemClick = (navItem) => {
        setActiveNavItem(navItem);
        setIsNavbarOpen(false);
    };

    return (
        <nav className={`navbar ${theme === "light" ? "" : "navbar-dark"} navbar-expand-lg fixed-top navbarScroll AppheaderDiv`}>
            <div className="container">
                <a className="navbar-brand navbarpadDiv navbarDiv" onClick={() => navigate('/body')}>Portfoliedge</a>
                <button className="navbar-toggler" type="button" onClick={handleNavbarToggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto">
                        <li className={`nav-item custom-nav-item-hover ${activeNavItem === 'body' ? 'active' : (activeNavItem === 'null' || activeNavItem === '' ? 'active' : '')}`}>
                            <a className="nav-link navfontDiv" onClick={() => { navigate('/body'); handleNavItemClick('body'); }}>Home</a>
                        </li>
                        <li className={`nav-item custom-nav-item-hover ${activeNavItem === 'about' ? 'active' : ''}`}>
                            <a className="nav-link navfontDiv" onClick={() => { navigate('/about'); handleNavItemClick('about'); }}>About</a>
                        </li>
                        <li className={`nav-item custom-nav-item-hover ${activeNavItem === 'portfolio' ? 'active' : ''}`}>
                            <a className="nav-link navfontDiv" onClick={() => { navigate('/portfolio'); handleNavItemClick('portfolio'); }}>Portfolio</a>
                        </li>
                        <li className={`nav-item custom-nav-item-hover ${activeNavItem === 'contactus' ? 'active' : ''}`}>
                            <a className="nav-link navfontDiv" onClick={() => { navigate('/contactus'); handleNavItemClick('contactus'); }}>Contact</a>
                        </li>
                        {
                            isNavbarOpen ?
                                <>
                                    <li className="nav-item">
                                        <div className="d-flex justify-content-between" onClick={handleNavbaritemToggle}><span>More</span><span>{isNavbaritemOpen ? <i class="bi bi-chevron-down"></i> : <i class="bi bi-chevron-up"></i>}</span></div>
                                        <div className={`collapse navbar-collapse ${isNavbaritemOpen ? 'show' : ''}`}>
                                            <div className="ms-auto py-1">
                                                <button type="button" className="btn btn-secondary" onClick={() => { toggleTheme(); handleNavItemClick(); }}>
                                                    {theme === "light" ? <i className="bi bi-brightness-high-fill"></i> : <i className="bi bi-moon-fill"></i>}
                                                </button>
                                            </div>
                                            <div className="py-1">
                                                <button type="button" className="btn custom-btn-bg" onClick={() => { handledownloadresume(); handleNavItemClick(); }}>Download Resume</button>
                                            </div>
                                        </div>
                                    </li>
                                </> : ''
                        }
                    </ul>
                    {
                        isNavbarOpen ? '' :
                            <>
                                <div style={{ paddingLeft: '5%' }} className="d-flex gap-3">
                                    <button type="button" className="btn btn-secondary" onClick={toggleTheme}>
                                        {theme === "light" ? <i className="bi bi-brightness-high-fill"></i> : <i className="bi bi-moon-fill"></i>}
                                    </button>
                                    <button type="button" className="btn custom-btn-bg" onClick={handledownloadresume}>Download Resume</button>
                                </div>
                            </>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Header;
