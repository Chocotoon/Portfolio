import "../styles/Modal.css"
import { useState } from "react"

function Modal({ body, showModal, modal }) {

    const [isClosing, setIsClosing] = useState(false)

    const handleClose = () => {
        setIsClosing(true)
        setTimeout(() => {
            setIsClosing(false)
            showModal(false)
        }, 200)
    }

    if (!modal) {
        return null
    }

    return (
        <div className={`modal ${isClosing ? 'fade_out' : 'fade_in'}`} role="dialog" style={{ display: "block" }}>
            <div className="modal-content d-flex justify-content-center">
                <div className="modal-header d-flex justify-content-end border-0">
                    <button
                        className="btn border-0 text-primary fs-3"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={() => handleClose()}
                    >
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body d-flex justify-content-center">
                    <img className="shadow-lg" src={body} alt="CV" />
                </div>
            </div>
        </div>
    )
}

export default Modal
