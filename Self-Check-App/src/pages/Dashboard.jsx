import { useState } from 'react';
import SkillItem from '../components/SkillItem';
import ProgressBar from '../components/ProgressBar';

function Dashboard() {
    const [skills, setSkills] = useState([
        { id: 1, name: "Resume", completed: false },
        { id: 2, name: "Github", completed: false },
        { id: 3, name: "Aptitude", completed: false },
        { id: 4, name: "DSA Basics", completed: false },
        { id: 5, name: "React Basics", completed: false },
        { id: 6, name: "Communication", completed: false },
    ]);

    const toggleSkill = (id) => {
        setSkills(
            skills.map((skill) =>
                skill.id === id
                    ? { ...skill, completed: !skill.completed }
                    : skill
            )
        );
    };

    const completedCount = skills.filter(
        skill => skill.completed
    ).length;

    const percentage = Math.round(
        (completedCount / skills.length) * 100
    );

    return (
        <div className='dashboard'>
            <h1>Placement Readiness Dashboard</h1>

            <ProgressBar percentage={percentage} />

            {skills.map(skill => (
                <SkillItem
                    key={skill.id}
                    skill={skill}
                    toggleSkill={toggleSkill}
                />
            ))}
        </div>
    );
}

export default Dashboard;



