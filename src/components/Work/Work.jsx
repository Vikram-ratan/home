import { useEffect } from "react";
import './Work.css'
import work_data from '../../assets/mywork_data'

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
            </div>

            <div className="work-container">
                {work_data.map((work, index) => (
                    <div className="work-item" key={index}>
                        <div className="work-logo" aria-hidden={!work.w_img}>
                            {work.w_img ? (
                                <img src={work.w_img} alt={`${work.w_company} logo`} />
                            ) : (
                                <span>{work.w_logoText}</span>
                            )}
                        </div>
                        <div className="work-description">
                            <div className="work-description-item">
                                <h1>{work.w_name}</h1>
                                {work.w_client && <p className="work-client">Client: {work.w_client}</p>}
                            </div>

                            <div className="work-description-item">
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
