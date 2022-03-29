import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Skill = ({skill,percentage,icon,key}) => (
    <div className="py-3" key={key}>
    <h6><FontAwesomeIcon icon={icon} /> {skill}</h6>
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