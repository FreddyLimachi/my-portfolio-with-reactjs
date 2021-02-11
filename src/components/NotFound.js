
import {Link} from 'react-router-dom'

export const NotFound = () => {
    return (
        <div className="not-found">
            <div className="row">
                <div className="col-md-6 img-not-found animate__animated animate__zoomIn">
                    {/* Referenciando a pngtree por derechos de autor */}
                    <abbr title="imágenes prediseñadas extraterrestre png de es.pngtree.com">
                        <a href='https://es.pngtree.com/so/imágenes-prediseñadas-extraterrestre' target="_blank" rel="noopener noreferrer">
                            <img src={window.location.origin+'/img/not-found.png'} className="img-fluid" alt="astronauta"/>
                        </a>
                    </abbr>
                </div>
    
                <div className="col-md-6 return animate__animated animate__zoomIn">
                    <span>404</span>
                    <h1>PÁGINA no encontrada</h1>
                    <Link to="/">Ir a inicio</Link>
                </div>
            </div>

        </div>
    )
}