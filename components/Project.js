import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Techs from './Tech';
const Project = ({
    pageImg,
    pageTitle,
    pageType,
    pageDesc,
    pageIcons,
    pageUrl,
    codeUrl,
    key3
    }) => {
    return ( 
        <div className="col-md-4">
        <div className="card m-2" >
            <img src={pageImg} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title text-light">{pageTitle}</h5>
                <h6 className="card-title text-secondary">Type: {pageType}</h6>
                <p className="card-text text-secondary">{pageDesc}</p>
                <h6 className="card-title text-secondary">Used Techs:</h6>
                <hr className="text-secondary"/>
                <div className="row mb-3">
                    <Techs pageIcons={pageIcons}/>

               
             </div>
            <a href={pageUrl} className="btn btn-primary">Demo</a>
            <a href={codeUrl} className="btn btn-primary">Code <FontAwesomeIcon icon={faGithub}/></a>
            </div>
        </div> 
    </div>
     );
}
 
export default Project;