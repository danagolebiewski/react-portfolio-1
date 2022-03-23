import Particles from "react-tsparticles";
import particlesOptions from "./background/particles.json";

const App = () => {
    return (
        <div>
            <Particles options={particlesOptions} />
        </div>
    );
}

export default App;