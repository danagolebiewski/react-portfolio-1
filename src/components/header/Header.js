import './header.css';
import Resume from '../Resume';
import CJ from '../../assets/cj.png';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I Am</h5>
                <h1>CJ Sanders</h1>
                <h5 className="text-light">Fullstack Dev</h5>
                <Resume />
                <div className="cj">
                    <img src={CJ} alt="CJ Sanders" />
                </div>
            </div>
        </header>
    )
}

export default Header;