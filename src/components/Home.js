import { Link } from 'react-router-dom'
import { useState } from 'react'
import Typed from 'react-typed';

export const Home = () => {

    const [span] = useState([
        'Desarrollador Python', 
        'Desarrollador Web', 
        'Desarrollador Backend', 
        'Freelancer'
    ])

    return (
        <section className="home">
            <div className="row">
                <div className="col-md-6 presentation animate__animated animate__zoomIn">
                    <h5>Hola, soy</h5>
                    <h1 className="font-weight-bold">Freddy Limachi</h1>
                    <h4>y soy <Typed 
                            strings={span}
                            typeSpeed={100}
                            backSpeed={60}
                            loop
                        ></Typed>
                    </h4>
                    <Link to="/sobre-mi" className="btn btn-outline-success mt-4 btn-lg">Ver más</Link>
                   
                </div>
    
                <div className="col-md-6 img-home animate__animated animate__zoomIn">
                    <img src={window.location.origin+"/img/img-home.gif"} className="img-fluid" alt="developer"/>
                </div> 
            </div>

            
        </section>

    )
}
