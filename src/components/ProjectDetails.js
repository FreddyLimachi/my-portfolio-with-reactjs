import { useState, useEffect } from 'react'
import { projects } from '../data/projects'
import {NotFound} from './NotFound'

export const ProjectDetails = (props) => {

    const [project, setProject] = useState({
        id: '',
        img: '',
        name: '',
        description: '',
        technologies: [],
        github_link: '',
    })

    const [exists, setExists] = useState(false)

    const findProject = () => {

        const pro = projects.find(e => e.id === props.match.params.id)
        if (pro === undefined){
            setExists(false)
        } else {
            setExists(true)
            setProject(pro)
        }
    }

    useEffect(()=> {
        findProject()
     })

    if (exists) {
        return (
            <section className="details">
                <div className="row">
                    <div className="col-lg-8 animate__animated animate__zoomIn">
                    
                        <div className="mt-2 text-center">
                            <img src={window.location.origin+'/img/projectDetails'+project.img} 
                                className="img-fluid" 
                                alt={project.name}
                            />
                        </div>
                
                    </div>
                    <div className="col-lg-4 description animate__animated animate__zoomIn">
                        <h5 className="mb-4">{project.name}</h5>
                        <p>{project.description}</p>
                        <ul className="list-unstyled tec">
                            {project.technologies.map((tech) => (
                                <li key={tech} className="list-inline-item">• {tech}</li>
                            ))}
                        </ul>
                        <a 
                            href={project.github_link} 
                            className="btn btn-outline-success btn-lg my-4"
                            target="_blank"
                            rel="noopener noreferrer">
                            Ver código <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </section>
        )
    } else {
        return <NotFound/>
    }
}