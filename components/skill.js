const Skill = ({skill,percentage,key}) => (
    <div className="py-3" key={key}>
    <h5>{skill}</h5>
    <div className="progress">
        <div
            className="progress-bar bg-danger"
            role="progressbar"
            style={{width:`${percentage}%`}}
        ></div>
    </div>
</div>
)
 
export default Skill;