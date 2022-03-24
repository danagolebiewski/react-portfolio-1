import Particles from "react-tsparticles";

import particlesOptions from "./components/background/particles.json";
import Navigation from "./components/nav/Navigation";

const App = () => {
    return (
        <div>
            <Navigation />
            <Particles options={particlesOptions} />
        </div>
    );
}

export default App;