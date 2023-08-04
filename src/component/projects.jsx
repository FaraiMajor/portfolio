import React from "react";
import projectsData from "../project-data";
import "../styles/projects.css";
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Zoom from 'react-reveal/Zoom';

export default function Projects() {
    return (
        <div id="projects">
            <div className="projectSection">
                <Zoom>
                    <h1 className="project">
                        <span>MY</span> PROJECTS
                    </h1>
                </Zoom>

                <div className="projectsContainer">
                    {projectsData.map((project, index) => (
                        <Zoom>
                            <article className="workBox" key={index}>
                                <div className="imageContainer">
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div className="describeContainer">
                                    <h3>{project.title}</h3>
                                    <h4>
                                        Technologies Used:{" "}
                                        {project.technologies.map((tech, index) => (
                                            <span className="techStack" key={index}>
                                                {tech}{""}
                                            </span>
                                        ))}
                                    </h4>
                                    <ul>
                                        {project.description.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <div className="projectLinks">
                                        <button>
                                            <a
                                                href={project.liveLink}
                                                className="liveLink"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FontAwesomeIcon icon={faEye} color="black" className="icon" />
                                                VIEW
                                            </a>
                                        </button>
                                        <button>
                                            <a
                                                href={project.repoLink}
                                                className="repoLink"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                CODE
                                                <FontAwesomeIcon icon={faCode} color="black" className="icon" />
                                            </a>

                                        </button>
                                    </div>
                                </div>
                            </article>
                        </Zoom>
                    ))}
                </div>

            </div>
        </div>
    );
}
