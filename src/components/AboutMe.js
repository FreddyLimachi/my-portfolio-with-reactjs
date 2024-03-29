export const AboutMe = () => {

    return (
        <section className="about-me container">
            <div className="row">
    
                <div className="col-lg-6 col-xl-5 mb-4 animate__animated animate__backInUp">
                    <div className="img-me">
                        <img src={window.location.origin+"/img/img-me.png"} className="img-fluid"/>
                    </div>
                </div>
    
                <div className="col-lg-6 mb-4 ml-auto animate__animated animate__backInUp">
                    <p>Hola, mi nombre es Freddy Limachi Ortega,
                        tengo 21 años, soy un programador autodidacta y apasionado, hoy 
                        la mayor parte de mis conocimientos y atención se enfocan en el desarrollo <span>
                        backend con python</span>, constantemente voy aprendiendo nuevas tecnologías para
                        mejorar y actualizar mi stack de habilidades.
                    </p>    
                    
                    <h5 className="mt-4 mb-2 font-weight-bold">Mis habilidades</h5>
                    <div className="my-skills">
                        <div className="row">
                            <ul className="col-sm-6">
                                <li>· Python</li>
                                <li>· Flask</li>
                                <li>· Django</li>
                                <li>· MySQL - MariaDB</li>
                                <li>· PostgreSQL</li>
                                <li>· MongoDB</li>
                                <li>· Ubuntu, Debian</li>
                            </ul>
                            <ul className="col-sm-6">
                                <li>· Nginx (Básico)</li>
                                <li>· API REST</li>
                                <li>· Docker (Básico)</li>
                                <li>· React JS</li>
                                <li>· Bootstrap</li>
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