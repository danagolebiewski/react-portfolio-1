import React from 'react';
import '../styles/Navbar.css';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                <div className="navbar-brand" id="homeName">CJ Sanders</div>
                <div className="navbar-brand" id="homeNameD">Full Stack Web Developer</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link glow" id="home" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="about" href="#">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="projects" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.linkedin.com/in/cj-sanders-5031a08b" target="_blank"><i className="fab fa-linkedin"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/EsotericZ" target="_blank"><i className="fab fa-github"></i></a>
                        </li>
                        <li className="nav-item">
                            <a href="#myModal" data-toggle = "modal" data-target= "#myModal" className="nav-link"><i className="fa fa-address-card"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;