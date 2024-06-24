import BannerImg from "../assets/photo-portfolio.png"
import Button from "./Button"
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import CV from "../assets/CV.png"
function Banner({ hContent, children }) {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div className="row gx-5 pt-5">
            <div className="col-md-8 col pt-5 text-md-start text-center">
                <h1 className="fw-bold">{hContent}</h1><br />
                <p>{children}</p>
                <button className="btn bg-primary bg-gradient text-light fw-bold mb-2" onClick={handleShow}>Voir mon CV</button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton >
                    </Modal.Header>
                    <Modal.Body ><img src={CV} alt="" style={{ width: '100%' }}></img></Modal.Body>
                </Modal>
            </div>
            <div className="col-md-4 col d-flex justify-content-center">
                <img className="rounded-2" src={BannerImg} alt='Nicolas Khamsopha' />
            </div>
        </div>
    )
}

export default Banner