import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Navbar = () => {

    const [click, setClick] = useState('')

    const toggleMenu = () => {
        if (click === ''){
            setClick('show')
        } else {
            setClick('')
        }
    }

    return (
        <section>
            <div className={`menu-btn ${click}`} onClick={toggleMenu}>
                <i className="fas fa-bars fa-2x"></i>
            </div>
            <div className={`menu-close ${click}`} onClick={toggleMenu}>
                <i className="fas fa-times fa-2x"></i>
            </div>
    
            <div className="nav-container">
    
                <nav className="nav-main">

                    <img src={window.location.origin+"/img/logo.png"} className="nav-brand" alt="Freddy Limachi Ortega"/>
                    
                    <ul className={`nav-menu ${click}`}>
                        <li>
                            <Link to="/" onClick={toggleMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to="/sobre-mi" onClick={toggleMenu}>Sobre mí</Link>
                        </li>
                        <li>
                            <Link to="/proyectos" onClick={toggleMenu}>Proyectos</Link>
                        </li>
                        <li>
                            <Link to="/contacto" onClick={toggleMenu}>Contacto</Link>
                        </li>
                    </ul>
            
                </nav>
            </div>
        </section>

    )
}