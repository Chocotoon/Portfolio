import BannerImg from "../assets/photo-portfolio.png"

function Banner({ hContent, children, showModal }) {

    return (
        <div className="row gx-5 pt-5">
            <div className="col-md-8 col pt-5 text-md-start text-center">
                <h1 className="fw-bold">{hContent}</h1><br />
                <p>{children}</p>
                <button className="btn btn-primary fw-bold" onClick={() => showModal(true)}>Voir mon CV</button>
            </div>
            <div className="col-md-4 col d-flex justify-content-center">
                <img className="rounded-2" src={BannerImg} alt='Nicolas Khamsopha' />
            </div>
        </div>
    )
}

export default Banner