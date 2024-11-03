import Header from "../components/Header"
import Banner from "../components/Banner"
import ProgressBar from "../components/ProgressBar"
import { stacks } from "../data/stacks"
import { reactProjects } from "../data/reactProjects"
import Card from "../components/Card"
import reactCode from "../assets/code_react.jpeg"
import Footer from "../components/Footer"
import Slideshow from "../components/Slideshow"
import Modal from "../components/Modal"
import CV from "../assets/CV.png"
import { useState } from "react"

function Home() {
    const [modal, showModal] = useState(false)
    return (
        <div className="container">
            <Header className="container-fluid" />
            <Banner showModal={ showModal } hContent={<>Nicolas Khamsopha<br />
                Développeur FrontEnd </>}>
                Bienvenue ! Je suis Nicolas, 32 ans, passionné par le développement de logiciels.<br />
                Merci de visiter mon portfolio, j'espère avoir bientôt l'opportunité de travailler avec vous !<br /><br />
            </Banner>
            <Modal modal={modal} showModal={ showModal } body={CV} />
            <section className="mt-4 mb-5" id="projets">
                <h2 className="mb-5 fw-bold">Mes Projets</h2>
                <Slideshow projects={reactProjects}>
                    {reactProjects.map(project => (
                        <div key={`${project.title}-${project.id}`} className="col-md-4 col-xxl-3">
                            <Card
                                cardTitle={project.title}
                                image={project.image}
                                cardText={project.description}
                                link={project.url || project.screen || null}
                                githubLink={project.gitHub}
                            />
                        </div>
                    ))}
                </Slideshow>
            </section>
            <section className="row" id="competences" style={{ marginTop: 120, marginBottom: 120 }}>
                <h2 className="mb-4 fw-bold">Mes compétences</h2>
                <div className="col-xl-8">
                    {stacks.map(stack => (
                        <ProgressBar key={`${stack.name}-${stack.value}`}
                            value={stack.value}
                            icon={stack.icon}
                            name={stack.name} />
                    ))}
                </div>
                <img className="col d-xl-block d-none" src={reactCode} alt="" />
            </section>

            <Footer />
        </div>

    )
}

export default Home