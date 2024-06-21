import Button from "./Button"

function Card({ cardTitle, image, link, githubLink, cardText }) {
    return (
        <div className="card mb-2" style={{ minHeight: 650 }}>
            <img src={image} className="card-img-top img-fluid mb-0" style={{ height: 110, objectFit: "contain" }} alt="" />
            <div className="card-body d-flex flex-column justify-content-between">
                <h3 className="card-title fw-bold">{cardTitle}</h3>
                <div className="card-text">{cardText}</div>
                <div className="d-flex flex-column">
                    <Button path={link} target="_blank">Voir le projet</Button>
                    <Button path={githubLink} target="_blank">Voir le repo du projet</Button>
                </div>
            </div>
        </div>
    )
}

export default Card