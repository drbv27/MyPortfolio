import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Techs = ({pageIcons}) => {
    return ( 
        <>
            {pageIcons.map((iconT,index)=>
                <div className="col-md-4 text-light">
                    <FontAwesomeIcon icon={iconT} key={index}/>
                </div>
            )}
        </>


     );
}
 
export default Techs;