import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHtml5, faCss3, faSass, faJs, faReact,faCss3Alt } from '@fortawesome/free-brands-svg-icons'
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
                <div className="row">
                    <div className="col-md-4 text-light">
                        <FontAwesomeIcon icon={faHtml5} />
                    </div>
                <div className="col-md-4 text-light">
                    html
                </div>
                <div className="col-md-4 text-light">
                    html
                </div>
                <div className="col-md-4 text-light">
                    html
                </div>
             </div>
            <a href="#" className="btn btn-primary">Demo</a>
            <a href="#" className="btn btn-primary">Code</a>
            </div>
        </div> 
    </div>
     );
}
 
export default Project;