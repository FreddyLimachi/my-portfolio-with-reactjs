
import {Link} from 'react-router-dom'
import { projects } from '../data/projects'

export const Projects = () => {
    
    return ( 
        <section className="projects ">
            <div className="row mt-5">

                { projects.map((project) => (
                    <div key={project.id} className="col-sm-12 col-md-6 col-lg-4 mb-5 animate__animated animate__zoomIn">
                        <div className="preview-project">
                            
                            <div className="card-header">
                                <h6>{project.name}</h6>
                            </div>
                            <div className="card-body">
                                <img src={window.location.origin+'/img/projects'+project.img} 
                                    className="img-fluid" 
                                    alt={project.name}
                                />
                            </div>
                        
                            <div className="card-footer d-flex">
                                <Link to={"proyectos/"+project.id} 
                                    className="btn-outline ml-auto">
                                    Ver detalles
                                </Link>
                            </div>

                        </div> 
                    </div>
                ))}
            </div> 
        </section>
    )
}