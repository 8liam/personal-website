import { TbWorld } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';

const projects = [
    {
        title: 'Spotify Live Lyrics',
        description: "Displays the song lyrics of what you're listening to on Spotify or Soundcloud.",
        technologies: 'React / TypeScript',
        websiteLink: '',
        githubLink: 'https://github.com/8liam/'
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
                    <div className="project-text">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
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