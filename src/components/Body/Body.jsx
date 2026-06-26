import { useRef, useEffect } from "react"
import "./Body.css"
// import Hero from "../Hero/Hero"
import Navbar from "../Navbar/Navbar"
import About from "../About/About"
import Work from "../Work/Work"
import Projects from "../Projects/Projects"
import Education from "../Education/Education"

const AppContainer = () => {
    // Create refs for each section
    const aboutRef = useRef(null);
    const workRef = useRef(null);
    const projectsRef = useRef(null);
    const educationRef = useRef(null);

    // Scroll to a specific section
    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    useEffect(() => {
        // Intersection Observer for fade-in animation
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("section-visible");
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
        );

        // Observe each section
        const sections = [aboutRef, workRef, projectsRef, educationRef];
        sections.forEach((sectionRef) => observer.observe(sectionRef.current));

        // Cleanup observer on component unmount
        return () => observer.disconnect();
    }, []);

    return (
        <div className="app-container" id="container">
            <div className="body-container">
                <div className="body-navigator">
                    <Navbar scrollToSection={scrollToSection} refs={{ aboutRef, workRef, projectsRef, educationRef }} />
                </div>
                <div className="body-content">
                    <section ref={aboutRef}>
                        <About />
                    </section>
                    <section ref={workRef}>
                        <Work />
                    </section>
                    <section ref={projectsRef}>
                        <Projects />
                    </section>
                    <section ref={educationRef}>
                        <Education />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AppContainer;
