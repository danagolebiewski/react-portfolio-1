import Particles from "react-tsparticles";
import particlesOptions from "./background/particles.json";

const App = () => {
    return (
        <div className="App">
            <Particles options={particlesOptions} />
        </div>
    );
}

export default App;