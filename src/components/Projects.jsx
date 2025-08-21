import { projectData } from './data.js';

const Projects = () => {
    return (
        <div className="projects-container">
            <h2> Projets </h2>
            <div className="projects-grid">
                {projectData && projectData.map((project) => (
                    <div className={"project-card "+project.name} key={project.id}>
                        <div className="project-header">
                            <div> 
                                <i className="fa-solid fa-circle-dot"></i>&nbsp;
                                <i className="fa-solid fa-circle-dot"></i>&nbsp;
                                <i className="fa-solid fa-circle-dot"></i>&nbsp;
                            </div>
                            <div className="small-icons">
                                <a href={project.gitHubLink}><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        <div className="project-body">
                          <img src={project.image} className="card-img-top" alt="..." width="500px" />
                          <h2>{project.title}</h2>
                          <p>{project.description}</p>
                          <div className='project-technologies'>
                            <strong> Technologies: </strong>
                            <p> {project.technos} </p>    
                          </div>
                        </div>
                    </div>
                ))
                }
                 <div className="project-blog-button">
                    <h2>
                        <a href="htps://codenakry.web.app" className="btn-blog"> Visitez mon blog.. </a> 
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Projects;