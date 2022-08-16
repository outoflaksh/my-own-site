import "../../styles/layout.css";
import "../../styles/hero.css";
import Heading from "./Heading";
import Terminal from "./Terminal";

const Hero = () => {
    return (
        <section className="page-section bg1 hero-container">
            <Heading />
            <Terminal />
        </section>
    );
};

export default Hero;
