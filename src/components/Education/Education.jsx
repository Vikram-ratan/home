import './Education.css'
import education_data from "../../assets/education_data";

const Education = () => {
    return (

        <div id='education' className="education">
            <div className="education-title">
                <h1>Education</h1>
            </div>

            <div className="education-item-container">
                {education_data.map((education, index) => (
                    <div key={index} className="education-item">
                        <div className="education-format">
                            <img src={education.e_logo} alt={`${education.e_name} logo`} />
                            <div className="education-info">
                                <h2>{education.e_name}</h2>
                                <h3>{education.e_degree}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education
