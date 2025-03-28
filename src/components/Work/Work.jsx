import React, { useEffect } from "react";
import './Work.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import work_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Work = () => {

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-in-view");
                        observer.unobserve(entry.target); // Stop observing once animated
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the element is in view
        );

        const elements = document.querySelectorAll(".work-item");
        elements.forEach(element => observer.observe(element));
    }, []);


    return (
        <div id='work' className="work">
            <div className="work-title">
                <h1>Work Experience</h1>
                {/* <img src={theme_pattern} alt="" /> */}
            </div>

            <div className="work-container">
                {work_data.map((work, index) => (
                    <div className="work-item" key={index}>
                        {/* <img src={work.w_img} alt="" /> */}
                        <div className="work-description">
                            <div className="work-description-item">
                                <h1>Title: {work.w_name}</h1>
                            </div>

                            <div className="work-description-item">
                                <h1>Description:</h1>
                                <h2>{work.w_desc}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work
