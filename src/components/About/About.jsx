import './About.css';

const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About me</h1>
                {/* <img src={theme_pattern} alt="" /> */}
            </div>
            <div className="about-sections">
                {/* <div className="about-left">
                    <img src={profile_img} alt="" />
                </div> */}
                <div className="about-right">
                    <div className="about-paragraph">
                        <p>I work at the intersection of business intelligence, stakeholder analytics, and AI-assisted delivery. My focus is simple: understand the business problem, structure the data, and turn analysis into decisions teams can act on.
                        </p>
                        <p>Across Power BI, Looker, SQL, Snowflake, and AI-enabled workflows, I support reporting, dashboarding, and client-facing analytics work. I also enjoy the project side of analytics: clarifying requirements, coordinating across stakeholders, tracking deliverables, and making sure technical work stays connected to business outcomes.
                        </p>
                        <p>I use AI tools, including Claude Code, to support the SDLC: clarifying requirements, analyzing logic, accelerating documentation, improving code quality, and validating outputs. The advantage is not just using AI, but using it responsibly: asking better questions, checking assumptions, setting up guardrails, understanding business context, and turning AI-assisted work into reliable decision support.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
