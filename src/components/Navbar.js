import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

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
        <nav className="nav-container">

            <div className={`menu-btn ${click}`} onClick={toggleMenu}>
                <img src={window.location.origin+'/svgs/menu.svg'}></img>
            </div>
            <div className={`menu-close ${click}`} onClick={toggleMenu}>
                <img src={window.location.origin+'/svgs/close.svg'}></img>
            </div>

            <div className="nav-main">

                <img src={window.location.origin+"/svgs/logo.svg"} className="nav-brand" alt="Freddy Limachi Ortega"/>
                
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
        
            </div>
        </nav>
    )
}