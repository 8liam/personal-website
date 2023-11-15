import { TbWorld } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';
import React from 'react';

const projects = [
    {
        title: 'FMLyrics',
        description: "Displays the song lyrics of what you're listening to on Spotify or Soundcloud via the Last.fm API.",
        technologies: 'React / TypeScript',
        websiteLink: 'https://fmlyrics.netlify.app/',
        githubLink: 'https://github.com/8liam/FMLyrics'
    },
    {
        title: 'This website!',
        description: "My personal portfolio website",
        technologies: 'React',
        websiteLink: 'https://liamg.zip/',
        githubLink: 'https://github.com/8liam/personal-website'
    },
    {
        title: 'Minecraft Account Tool',
        description: 'Displays Account Information and Skin about any Minecraft Username.',
        technologies: 'React',
        websiteLink: 'https://minecraft-account-tool-react.vercel.app/',
        githubLink: 'https://github.com/8liam/minecraft-account-tool-react'
    },


];

const ProjectGrid = () => {
    return (
        <div className="grid-container">
            {projects.map((project, index) => (
                <div className="grid-item" key={index}>
                    <div className="project-content">

                        <div className="project-title">
                            <h3>{project.title}</h3>
                        </div>
                        <div className="project-text">
                            <p>{project.description}</p>
                        </div>
                        <div className="project-footer">
                            <div className="project-technologies">
                                <p>{project.technologies}</p>
                            </div>
                            <div className="icon-card-container">
                                {project.websiteLink && (
                                    <a className="icon" href={project.websiteLink} target="_blank" rel="noopener noreferrer">
                                        <TbWorld size="2rem" />
                                    </a>
                                )}
                                <a className="icon" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    <FaGithub size="1.9rem" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default function Projects() {
    return (
        <div className='section' id='projects'>
            <h1>projects</h1>
            <ProjectGrid />
        </div>
    )
}