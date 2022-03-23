import Particles from "react-tsparticles";

import particlesOptions from "./background/particles.json";
import Navigation from "./components/Navigation";

const App = () => {
    return (
        <div>
            <Navigation />
            <Particles options={particlesOptions} />
        </div>
    );
}

export default App;