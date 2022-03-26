import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
    <a className="navbar-brand" href="/">Diego Bonilla</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" href="/">Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <Link href="/blog">
            <a className="nav-link" >Blog <FontAwesomeIcon icon={faCoffee} /></a>
            
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.linkedin.com/in/diego-ricardo-bonilla-villa-7179254a/"><FontAwesomeIcon icon={faLinkedin} /></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/drbv27"><FontAwesomeIcon icon={faGithub} /></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
 
export default Navbar;