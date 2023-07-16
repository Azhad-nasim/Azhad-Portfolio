import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import Logos from '../../assets/images/Azhad-removebg-preview.png'
// import Logosubtitle from '../../assets/images/text-1684465196775-removebg-preview (1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeFork, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

function SideBar(props) {
  let navigate = useNavigate()

  function changeLocation(placeToGo) {
    navigate(placeToGo, { replace: true })
    window.location.reload()
  }
  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => changeLocation('/')}>
        <img src={Logos} alt="logo" className="logoS" />
        {/* <img className="sub-logo" src={Logosubtitle} alt="azhad" /> */}
      </Link>
      <nav>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => changeLocation('/')}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/project"
          className="project-link"
          onClick={() => changeLocation('/project')}
        >
          <FontAwesomeIcon icon={faCodeFork} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/about"
          className="about-link"
          onClick={() => changeLocation('/about')}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/contact"
          className="contact-link"
          onClick={() => changeLocation('/contact')}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/azhad-nasim-b5a09024b/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Azhad-nasim"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/azhad__nasim/"
          >
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}
export default SideBar
