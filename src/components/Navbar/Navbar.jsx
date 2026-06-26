/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Navbar = ({ scrollToSection, refs }) => {

    const [selectedItem, setSelectedItem] = useState(null);

    const sections = [
        { label: 'About Me', key: 'about', ref: refs.aboutRef },
        { label: 'Work', key: 'work', ref: refs.workRef },
        { label: 'Projects', key: 'projects', ref: refs.projectsRef },
        { label: 'Education', key: 'education', ref: refs.educationRef },
    ];

    const handleItemClick = (item, ref, key) => {
        setSelectedItem(item);
        setMenu(key);
        scrollToSection(ref);

        setTimeout(() => {
            setSelectedItem(null);
        }, 500);
    };

    // JavaScript to toggle the navbar position
    // window.addEventListener('scroll', () => {
    //     const navbar = document.querySelector('.navbar');
    //     const scrollPosition = window.scrollY;

    //     // Check if the user has scrolled down a certain amount
    //     if (scrollPosition > 50) { // Adjust this threshold as needed
    //         navbar.classList.add('scrolled');
    //     } else {
    //         navbar.classList.remove('scrolled');
    //     }
    // });

    const [menu, setMenu] = useState('home');
    const menuReference = useRef();

    // const openMenu = () => {
    //     menuReference.current.style.right = "0";
    // }
    // const closeMenu = () => {
    //     menuReference.current.style.right = "-350px";
    // }

    return (
        <div className="navbar">
            <div className="navbar-mobile" id="mobile-show">
                <ul>
                    {sections.map((section) => (
                        <li
                            key={section.key}
                        >
                            <button
                                type="button"
                                onClick={() => handleItemClick(section.label, section.ref, section.key)}
                                style={{
                                    backgroundColor: selectedItem === section.label ? 'var(--button-bg)' : 'transparent',
                                    color: selectedItem === section.label ? 'white' : 'inherit'
                                }}
                            >
                                {section.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <h1>Vikram</h1>
            {/* <img src={logo} alt="logo" /> */}
            {/* <img src={menu_open} alt="logo" className="nav-mob-open" /> */}
            <ul ref={menuReference} className="nav-menu">
                {/* <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" /> */}
                {/* <li><AnchorLink className="anchor-link" offset={50} href='#home'><p onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>Home</p></AnchorLink></li> */}
                <li>
                    {/* <AnchorLink className="anchor-link" offset={50} href="#about"> */}
                    <button
                        type="button"
                        onClick={() => {
                            scrollToSection(refs.aboutRef);
                            setMenu('about');
                        }}
                        className={menu === 'about' ? 'active' : ''}
                    >
                        About Me
                    </button>
                    {/* </AnchorLink> */}
                </li>
                <li>
                    {/* <AnchorLink className="anchor-link" offset={50} href="#work"> */}
                    <button
                        type="button"
                        onClick={() => {
                            scrollToSection(refs.workRef);
                            setMenu('work');
                        }}
                        className={menu === 'work' ? 'active' : ''}
                    >
                        Work
                    </button>
                    {/* </AnchorLink> */}
                </li>
                <li>
                    {/* <AnchorLink className="anchor-link" offset={50} href="#projects"> */}
                    <button
                        type="button"
                        onClick={() => {
                            scrollToSection(refs.projectsRef);
                            setMenu('projects');
                        }}
                        className={menu === 'projects' ? 'active' : ''}
                    >
                        Projects
                    </button>
                    {/* </AnchorLink> */}
                </li>
                <li>
                    {/* <AnchorLink className="anchor-link" offset={50} href="#education"> */}
                    <button
                        type="button"
                        onClick={() => {
                            scrollToSection(refs.educationRef);
                            setMenu('education');
                        }}
                        className={menu === 'education' ? 'active' : ''}
                    >
                        Education
                    </button>
                    {/* </AnchorLink> */}
                </li>

                {/* <li><AnchorLink className="anchor-link" offset={50} href='#contact'><p onClick={() => setMenu('contact')} className={menu === 'contact' ? 'active' : ''}>Contact</p></AnchorLink></li> */}
            </ul>
            <AnchorLink className="anchor-link" offset={50} href='#contact'><div className="nav-connect">Connect</div></AnchorLink>
        </div>
    )
}

export default Navbar
