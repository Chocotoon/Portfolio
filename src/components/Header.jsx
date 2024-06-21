function Header() {
    return (
        <div className="mb-5">
            <nav className="navbar bg-light navbar-expand-md navbar-light fixed-top">
                <div className="container">
                    <p className="navbar-brand text-uppercase fw-bold">
                        <span className="bg-primary bg-gradient p-1 rounded-3 text-light">Nicolas</span> Khamsopha
                    </p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/#competences">Mes compétences</a>
                            </li>
                            <li>
                                <a className="nav-link" href="/#projets">Mes projets</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header