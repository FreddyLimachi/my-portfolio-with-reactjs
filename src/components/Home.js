import { Link } from 'react-router-dom'

export const Home = () => {

    return (
        <section className="home container">
            <div className="row">
                <div className="col-xl-8 col-md-12 presentation animate__animated animate__backInUp">
                    <h5>Hola, soy</h5>
                    <h1 className="font-weight-bold">FREDDY LIMACHI ORTEGA</h1>
                    <h4><span>python developer
                    </span>, autodidacta y muy apasionado por la tecnología.
                    </h4>
                    <Link to="/sobre-mi" className="btn-outline btn-big mt-4 btn-lg">Ver más</Link>
                   
                </div>                
            </div>

            <img src={window.location.origin+"/img/code.png"} className="img-code animate__animated animate__zoomIn" alt="code"/>
            <img src={window.location.origin+"/img/hologram.png"} className="img-hologram" alt="hologram"/>
      
        </section>
    )
}
