import Skill from "./skill";

const SkillsCard = ({skills}) => {
  return (
    <div className="col-md-4">
    <div className="card bg-light">
        <div className="card-body">
            <h1>Skills</h1>
            {
                skills.map(({skill,percentage,icon},i)=>(
                    <Skill skill={skill} percentage={percentage} icon={icon} key={i}/>
                 ))
            }
        </div>
    </div>
</div>
  )
}
export default SkillsCard