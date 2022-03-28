import { useState } from 'react';
import './nav.css';

import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
import ThreePIcon from '@mui/icons-material/ThreeP';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href="#"
                onClick={() => setActiveNav('#')}
                className={activeNav === '#' ? 'active' : ''}
            ><HomeIcon/></a>
            <a href="#about"
                onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'active' : ''}
            ><AccountCircleIcon/></a>
            <a href="#projects"
                onClick={() => setActiveNav('#projects')}
                className={activeNav === '#projects' ? 'active' : ''}
            ><WorkIcon/></a>
            <a href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={activeNav === '#contact' ? 'active' : ''}
            ><ThreePIcon/></a>
        </nav>
    )
}

export default Nav;