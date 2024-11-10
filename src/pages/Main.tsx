import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact"; // Import the Contact component

const Main: React.FC = () => {
    return (
        <div className="lg:mx-32 md:mx-4">
            <section id="home">
                <Intro />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact"> {/* Add id="contact" here */}
                <Contact />
            </section>
        </div>
    );
};

export default Main;
