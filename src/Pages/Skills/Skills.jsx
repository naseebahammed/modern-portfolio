import React from "react";
import "./Skills.scss";
import skillsData from "./../../data/skillsData.json";

const Skills = () => {
  return (
    <div className="container">
      <div className="skills">
        <div className="wrapper">
          <div className="skills-wrapper">
            <div className="skills-header">
              <div className="experience-header_heading">Skills</div>
              <p className="experience-header_para">
                These are the place and times, that made me, who I am
              </p>
            </div>

            <ul className="skills-items">
              {skillsData &&
                skillsData.map((skills) => {
                  return (
                    <li key={skills.id}>
                      <img
                        src={skills.img}
                        alt=""
                        onMouseEnter={skills.imgHover}
                      />
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
