import ThreePIcon from '@mui/icons-material/ThreeP';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './footer.css';

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>CJ</a>

            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#About Me'>About Me</a></li>
                <li><a href='#Projects'>Projects</a></li>
                <li><a href='#Contact'>Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://facebook.com'><ThreePIcon /></a>
                <a href='https://instagram.com'><GitHubIcon /></a>
                <a href='https://twitter.com'><LinkedInIcon /></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; 2022</small>
            </div>

        </footer>
    )
}

export default Footer;