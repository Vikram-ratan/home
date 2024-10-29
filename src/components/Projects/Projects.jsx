import React from "react";
import './Projects.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import projects_data from "../../assets/projects_data"
import arrow_icon from "../../assets/arrow_icon.svg"

const Projects = () => {
    const handleClick = link => {
        window.open(link, '_blank');
    }
    return (
        <div id='projects' className="projects">
            <div className="projects-title">
                <h1>Projects</h1>
                {/* <img src={theme_pattern} alt="" /> */}
            </div>
            <div className="projects-container">
                {projects_data.map((project, index) => {
                    return <div key={index} className="projects-format" onClick={() => handleClick(project.s_link)}>
                        <h3>{project.s_no}</h3>
                        <h2>{project.s_name}</h2>
                        <p>{project.s_desc}</p>
                        <div className="projects-readmore">
                            <p>Click to Read More</p>
                            <img src={arrow_icon} alt="" />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Projects