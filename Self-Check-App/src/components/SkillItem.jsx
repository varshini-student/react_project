// function SkillItem({skill,toggleSkill}){
//     return(
//         <div>
//             <input type="checkbox"
//              checked={skill.completed}
//              onChange={()=> toggleSkill(skill.id)} />

//              <label>
//                 {skill.name}
//              </label>
//         </div>
//     );
// }
// export default SkillItem;
function SkillItem({ skill, toggleSkill }) {
    return (
        <div className="skill-item">
            <input
                type="checkbox"
                checked={skill.completed}
                onChange={() => toggleSkill(skill.id)}
            />

            <label className={skill.completed ? "completed" : ""}>
                {skill.name}
            </label>
        </div>
    );
}

export default SkillItem;
