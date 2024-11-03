import Button from "./Button"

function Card({ project }) {
    return (
        <div className="mb-2 d-flex flex-column align-items-center mt-2">
            <img src={project.image} className="card-img-top img-fluid mb-0" style={{ height: 110, objectFit: "contain" }} alt="" />
            <div className="card-body d-flex flex-column justify-content-between">
                <h3 className="card-title fw-bold ">{project.title}</h3>
                <div className="card-text">{project.description}</div>
                <div className="d-flex flex-column">
                    <Button path={project.url} target="_blank" >Voir le projet</Button>
                    <Button path={project.gitHub} target="_blank">Voir le repo du projet</Button>
                </div>
            </div>
        </div>
    )
}

export default Card