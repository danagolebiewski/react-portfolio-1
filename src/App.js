import Particles from "react-tsparticles";

import particlesOptions from "./components/background/particles.json";
// import Navigation from "./components/nav/Navigation";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <div>
            <Header />
            <Nav />
            <About />
            <Projects />
            <Contact />
            <Footer />
            <Particles options={particlesOptions} />
        </div>
    );
}

export default App;