import Header from "../components/Header"
import Banner from "../components/Banner"
import ProgressBar from "../components/ProgressBar"
import { stacks } from "../data/stacks"
import { reactProjects } from "../data/reactProjects"
import Card from "../components/Card"
import reactCode from "../assets/code_react.jpeg"
import Footer from "../components/Footer"


function Home() {
    return (
        <div className="container">
            <Header className="container-fluid" />
            <Banner hContent={<>Nicolas Khamsopha<br />
                Développeur FrontEnd </>}>
                Bienvenue ! Je suis Nicolas, 32 ans, passionné par le développement de logiciels.<br />
                Merci de visiter mon portfolio, j'espère avoir bientôt l'opportunité de travailler avec vous !<br /><br />
            </Banner>
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
            <section className="mt-4 mb-5" id="projets">
                <h2 className="mb-4 fw-bold">Mes Projets</h2>
                <h3 className="mb-4">React</h3>
                <div className="row mb-4">
                    {reactProjects[0].map(project => (
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
                </div>
                <h3 className="mb-4">Vanilla JS</h3>
                <div className="row">
                    {reactProjects[1].map(project => (
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
                </div>
            </section>
            <Footer />
        </div>

    )
}

export default Home