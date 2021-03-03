
import {Link} from 'react-router-dom'
import { projects } from '../data/projects'

export const Projects = () => {
    
    return ( 
        <section className="projects container">
            <div className="row mt-5">

                { projects.map((project) => (
                    <div key={project.id} className="col-sm-12 col-md-6 col-lg-4 mb-5 animate__animated animate__backInUp">
                        <div className="preview-project">
                            
                           
                            <div className="card-body">
                                <img src={window.location.origin+project.img} 
                                    className="img-fluid" 
                                    alt={project.name}
                                />
                                <Link to={"proyectos/"+project.id} 
                                    className="btn-outline ml-auto w-100 text-center">
                                    {project.name}
                                </Link>
                            </div>                           

                        </div> 
                    </div>
                ))}
            </div> 
        </section>
    )
}