import './home.css';
import CJ from '../../assets/cj.png';

const Home = () => {
    return (
        <header>
            <div className="container home">
                <h5>Hello I Am</h5>
                <h1>CJ Sanders</h1>
                <h5 className="text-light">Fullstack Dev</h5>
                <div className="cj">
                    <img src={CJ} alt="CJ Sanders" />
                </div>
            </div>
        </header>
    )
}

export default Home;