import '../styles/Slideshow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Card from './Card';


function Slideshow({ projects }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    return (
            <div className='carousel border-0 mt-5'>
                <button id="prev_btn" onClick={prevProject}><FontAwesomeIcon icon={faChevronLeft} /></button>
                <Card project={projects[currentIndex]}></Card>
                <button id="next_btn" onClick={nextProject}><FontAwesomeIcon icon={faChevronRight} /></button>
                <div className="imageCounter">
                    {currentIndex + 1}/{projects.length}
                </div>
            </div>
    )
}

export default Slideshow