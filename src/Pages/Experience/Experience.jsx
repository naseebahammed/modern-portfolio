import "./Experience.scss";
import experienceData from "./../../data/experienceData.json";

const Experience = () => {
  return (
    <div className="container">
      <div className="experience">
        <div className="experience-header">
          <div className="experience-header_text">
            <div className="experience-header_heading">Experience</div>
            <p className="experience-header_para">
              These are the place and times, that made me, who I am
            </p>
          </div>
          <div className="experience-header_year">3Yr+</div>
        </div>
        <div className="experience-list">
          {experienceData &&
            experienceData.map((exp) => {
              return (
                <div className="experience-card" key={exp.id}>
                  <div className="experience-card_heading">{exp.jobRole}</div>
                  <div className="experience-card_company">{exp.company}</div>
                  <div className="experience-card_place">{exp.place}</div>
                  <div className="experience-card_duration">{exp.duration}</div>
                  <button className="experience-card_button">Know More</button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
