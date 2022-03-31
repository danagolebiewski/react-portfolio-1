import './home.css';
import CJ from '../../assets/cj.png';

const Home = () => {
    return (
        <header>
            <div className="container home">
                <h1>CJ Sanders</h1>
                <h1 className="text-light">Full Stack Web Developer</h1>
                <div className="cj">
                    <img src={CJ} alt="CJ Sanders" />
                </div>
            </div>
        </header>
    )
}

export default Home;