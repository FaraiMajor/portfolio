import React from "react";
import skillsData from '../skills-data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Zoom from 'react-reveal/Zoom';

import '../styles/skills.css'

export default function Skills() {
    return (
        <div className="skillsSection" id="skills">
            <h1 className="skills-title"><span>MY</span> SKILLS</h1>
            <div class="area">
                <ul class="circles">
                    {skillsData.map(skill => (
                        <li key={skill.name}>
                            <FontAwesomeIcon icon={skill.icon} color="rgba(255, 255, 255, 0.1)" />
                        </li>
                    ))}
                </ul>
            </div>
            <Zoom>

                <div className="skillsContainer">
                    <ul className="skillsGrid">
                        {skillsData.map(skill => (
                            <li className="list" key={skill.name}>
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