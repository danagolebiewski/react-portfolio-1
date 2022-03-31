import ThreePIcon from '@mui/icons-material/ThreeP';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './footer.css';

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footerLogo'>CJ</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#About Me'>About Me</a></li>
                <li><a href='#Projects'>Projects</a></li>
                <li><a href='#Contact'>Contact</a></li>
            </ul>

            <div className='footerSocials'>
                <a href='https://facebook.com'><ThreePIcon /></a>
                <a href='https://instagram.com'><GitHubIcon /></a>
                <a href='https://twitter.com'><LinkedInIcon /></a>
            </div>

            <div className='footerCopyright'>
                <small>&copy; 2022</small>
            </div>

        </footer>
    )
}

export default Footer;