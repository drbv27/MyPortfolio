import {  faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMobileAndroidAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  return (
    <div className='container bg-light text-primary rounded'>
        <div className='row text-center'>
            <h2>Contact me</h2>
            <div className='col-md-4 mt-5'>
                <h5><FontAwesomeIcon icon={faMobileAndroidAlt} /> Phone: +57 319 218 1322</h5>
                <h5><FontAwesomeIcon icon={faEnvelope} /> Email: drbv27@gmail.com</h5>
            </div>
            <div className='col-md-4 text-center mt-5'>
                <a 
                href="https://www.linkedin.com/in/diego-ricardo-bonilla-villa-7179254a/" target="_blank"
                style={{fontSize:'3rem'}} className="text-primary">
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a 
                href="https://github.com/drbv27" target="_blank"
                style={{fontSize:'3rem',paddingLeft:"1rem",paddingRight:"1rem"}} className="text-primary">
                <FontAwesomeIcon icon={faGithub} />
                </a>
                <a 
                href="#" target="_blank"
                style={{fontSize:'3rem'}} className="text-primary">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
            <div className='col-md-4 mb-3'>
                <input type="text" placeholder="Fullname" className='form-control'></input>
                <input type="text" placeholder="email" className='form-control'></input>
                <input type="text" placeholder="Write me..." className='form-control'></input>
                <input type="submit" className='btn btn-danger' value="send"></input>

            </div>
        </div>
    </div>
  )
}

export default Footer