import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
function Footer() {
    return (
        <footer className="bg-light">
            <nav className="navbar bg-light navbar-expand-md navbar-light">
                <div className="container">
                    <p className="navbar-brand text-uppercase fw-bold">
                        <span className="bg-primary bg-gradient p-1 rounded-3 text-light">Nicolas</span> Khamsopha
                    </p>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com/Chocotoon" target="_blank">
                                <FontAwesomeIcon className="text-primary" size="2x" icon={faGithub} /></a>
                        </li>
                        <li>
                            <a className="nav-link" href="https://www.linkedin.com/in/nicolas-khamsopha-702893167/" target="_blank">
                                <FontAwesomeIcon className="text-primary" size="2x" icon={faLinkedin} /></a>
                        </li>
                        <li>
                            <a className="nav-link" href="mailto:nicolas.khamsopha@gmail.com">
                                <FontAwesomeIcon className="text-primary" size="2x" icon={faEnvelope} /></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </footer>
    )
}

export default Footer