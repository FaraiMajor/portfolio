import React from "react";
import skillsData from '../skills-data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Zoom from 'react-reveal/Zoom';

import '../styles/skills.css'

export default function Skills() {
    return (
        <div className="skillsSection" id="skills">
            <Zoom>
                <h1 className="skills-title"><span>MY</span> SKILLS</h1>
            </Zoom>
            <Zoom>
                <div className="skillsContainer">
                    <ul className="skillsGrid">
                        {skillsData.map(skill => (
                            <li key={skill.name}>
                                <div className="itemContainer">
                                    <FontAwesomeIcon icon={skill.icon} color={skill.color} fontSize={50} />
                                    <p>{skill.name}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Zoom>
        </div>
    );
}