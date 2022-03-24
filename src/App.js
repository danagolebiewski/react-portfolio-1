import Particles from "react-tsparticles";

import particlesOptions from "./components/background/particles.json";
import Navigation from "./components/nav/Navigation";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <div>
            <Navigation />
            <Header />

            <Particles options={particlesOptions} />
        </div>
    );
}

export default App;