

const skillsSet = new Set([
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'AWS',
    'Docker',
    'Git',
    'Node',
    'TypeScript'
]);

const skillsArray = Array.from(skillsSet);

const SkillsGrid = () => {
    return (
        <div className="skills-container">
            {skillsArray.map((skill, index) => (
                <div key={index} className="skill-item">
                    {skill}
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