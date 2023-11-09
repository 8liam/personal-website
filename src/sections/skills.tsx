

const skills = [
    {
        name: 'React',
    },
    {
        name: 'JavaScript',
    },
    {
        name: 'HTML',
    },
    {
        name: 'CSS',
    },
    {
        name: 'AWS',
    },
    {
        name: 'Docker',
    },
    {
        name: 'Git',
    },
];

const SkillsGrid = () => {
    return (
        <div className="skills-container">
            {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                    {skill.name}
                </div>
            ))}
        </div>
    );
};

export default function Skills() {
    return (
        <div className="section" id="projects">
            <h1>skills</h1>
            <SkillsGrid />
        </div>
    );
}