export const AboutMe = () => {

    return (
        <section className="about-me container">
            <div className="row">
    
                <div className="col-lg-6 col-xl-5 mb-4 animate__animated animate__zoomIn">
                    <img src={window.location.origin+"/img/img-me.jpg"} className="img-fluid" alt="Freddy Limachi Ortega"/>
                </div>
    
                <div className="col-lg-6 ml-auto animate__animated animate__zoomIn">
                    <p>Hola, mi nombre es <span>Freddy Limachi Ortega</span>, 
                        tengo 21 años, considero que la programación y la tecnología en general son mis 
                        más grandes aficiones. Soy muy autodidacta en el sentido de que la mayoría de
                        mis conocimientos lo adquirí por medio de internet y libros. Constantemente
                        voy aprendiendo nuevas tecnologías para mejorar y actualizar mi stack de 
                        habilidades.
                    </p>    
                   
                    <h5 className="mt-4 mb-2 font-weight-bold">Mis habilidades</h5>
                    <div className="my-skills">
                        <div className="row">
                            <ul className="col-md-6">
                                <li>· Python</li>
                                <li>· Flask</li>
                                <li>· Django (Básico)</li>
                                <li>· MySQL - MariaDB</li>
                                <li>· Mongo-DB</li>
                                <li>· Terminal linux</li>
                            </ul>                    
                            <ul className="col-md-6">
                                <li>· API REST</li>
                                <li>· Docker (Básico)</li>
                                <li>· React JS</li>
                                <li>· Bootstrap 4.5</li>
                                <li>· jQuery - AJAX</li>
                                <li>· Git - GitHub</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>

    )
}