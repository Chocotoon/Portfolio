import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons'

function ProgressBar({ value, icon, name }) {
    let iconComponent;

    switch (icon) {
        case 'faHtml5':
            iconComponent = <FontAwesomeIcon size="2x" className="text-primary" icon={faHtml5} />
            break
        case 'faCss3Alt':
            iconComponent = <FontAwesomeIcon size="2x" className="text-primary" icon={faCss3Alt} />
            break
        case 'faJs':
            iconComponent = <FontAwesomeIcon size="2x" className="text-primary" icon={faJs} />
            break
        case 'faReact':
            iconComponent = <FontAwesomeIcon size="2x" className="text-primary" icon={faReact} />
            break
        case 'faBootstrap':
            iconComponent = <FontAwesomeIcon size="2x" className="text-primary" icon={faBootstrap} />
            break
        default:
            iconComponent = null
    }

    return (
        <div className='bg-white py-3'>
            <div className='row'>
                <div className='col-md-2 d-flex'>
                    {iconComponent} 
                    <span className='text-dark fw-bold px-1'>{name}</span>
                </div>
                <div className="progress col 10 col-md-8 px-1 mx-3">
                    <div className="progress-bar"
                        role="progressbar"
                        style={{ width: `${value}%` }}
                        aria-valuenow={value}
                        aria-valuemin="0"
                        aria-valuemax="100">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;
