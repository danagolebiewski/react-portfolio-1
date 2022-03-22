import Particles from "react-tsparticles";
import particlesOptions from "./background/particles.json";
import PortNav from "./components/PortNav";

const App = () => {
    return (
        <div>
            <PortNav />
            <Particles options={particlesOptions} />
        </div>
    );
}

export default App;