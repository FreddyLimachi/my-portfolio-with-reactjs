import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export const ProjectDetails = (props) => {

    const [project, setProject] = useState({
        id: '',
        img: '/not-found.png',
        name: '404',
        description: 'Página no encontrada',
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

    const ButtonLink = () => {
        if (exists){
            return(
                <a 
                    href={project.github_link} 
                    className="btn btn-outline-success btn-lg my-4"
                    target="_blank"
                    rel="noopener noreferrer">
                    Ver código <i className="fab fa-github"></i>
                </a>
            )
        } else {
            return(
                <Link
                    to = "/"
                    className="btn btn-outline-success btn-lg my-4">
                    Ir a inicio
                </Link>
            )
        }
    }

    useEffect(()=> {
        findProject()
     })

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
                    <ButtonLink/>
                </div>
            </div>
        </section>
    )
}