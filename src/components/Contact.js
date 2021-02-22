
import {useState} from 'react'
import { ProgressBar} from 'react-bootstrap'
import axios from 'axios';
import Typed from 'react-typed';

const API = process.env.REACT_APP_API

export const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [progress, setProgress] = useState(0)
    const [warning, setWarning] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault()

        const options = {
            onUploadProgress: (progressEvent) => {
                const {loaded, total} = progressEvent
                let percent = Math.round( loaded * 100 / total)-1
                setProgress(percent)
            }
        }

        try{
            setProgress(50)
            const response = await axios.post(`${API}`, {
                name: name,
                email: email,
                message: message
            }, options)
            if (response.data.value){
                setName('')
                setEmail('')
                setMessage('')
                setProgress(0)
                window.alert("Su mensaje ha sido enviado satisfactoriamente")            
            } else {
                setProgress(0)
                if (response.data.msg == 'err_name')
                    setWarning('Escriba su nombre completo')
                else if (response.data.msg == 'err_email')
                    setWarning('Escriba correctamente su email')
                else if (response.data.msg == 'err_message')
                    setWarning('Su mensaje debe comprender entre 64 a 512 caracteres')
            }
    
        } catch(error){
            setProgress(0)
            window.alert("Ocurrio algun error en el servidor, vuelvalo a intentar")
        }
    }

    const Bar = () => {
        if (progress>0){
            return(
                <ProgressBar now={progress} label={`${progress}%`} variant="success" className="bg-dark" animated/>
            )
        }
        else{
            return(null)
        }     
    }

    return (
        <section className="contact container">
            <div className="row">
                <div className="col-md-6 mt-4 animate__animated animate__zoomIn">
                    <div className="row mb-5 ml-1">
                        <i className={`fas fa-map-marker-alt mt-2`}></i>
                        <div className="ml-4">
                            <h5>Ubicación</h5>
                            <p>Cusco - Perú</p>
                        </div>
                    </div>

                    <div className="row mb-5 ml-1">
                        <a href="https://github.com/FreddyLimachi" target="_blank" rel="noopener noreferrer">
                            <i className={`fab fa-github mt-2`}></i>
                        </a>
                        <div className="ml-4">
                            <h5>GitHub</h5>
                            <a href="https://github.com/FreddyLimachi" target="_blank" rel="noopener noreferrer">
                                github.com/FreddyLimachi
                            </a>
                        </div>
                    </div>
            
                    <div className="row mb-5 ml-1">
                        <a href="https://www.linkedin.com/in/freddylimachi" target="_blank" rel="noopener noreferrer">
                            <i className={`fab fa-linkedin-in ml-1 mt-2`}></i>
                        </a>
                        <div className="ml-4">
                            <h5>Linkedin</h5>
                            <a href="https://www.linkedin.com/in/freddylimachi" target="_blank" rel="noopener noreferrer">
                                .../in/freddylimachi
                            </a>
                        </div>
                    </div>  
                </div>
                
                <div className="col-md-6 col-lg-6 ml-auto animate__animated animate__zoomIn">
                    <div className="d-flex justify-content-between">
                        <h4>
                            <Typed 
                                className="typing"
                                strings={['Escríbeme']}
                                typeSpeed={120}
                                backSpeed={100}
                                loop
                            ></Typed>
                        </h4>             
                    </div>
                    
                    <Bar/>   
                    <span className="text-warning">{warning}</span>
                    <form onSubmit={sendMessage}>
                        <input 
                            className="control" 
                            type="text" 
                            placeholder="Ingrese su nombre" 
                            onChange={e => {setName(e.target.value); setWarning('')}}
                            value = {name}
                            required
                        />
                        <input 
                            className="control" 
                            type="email" 
                            placeholder="Ingrese su email" 
                            onChange={e => {setEmail(e.target.value); setWarning('')}}
                            value = {email}
                            required
                        />
                        <textarea 
                            className="control" 
                            placeholder="Escriba su mensaje" 
                            rows="4" 
                            onChange={e => {setMessage(e.target.value); setWarning('')}}
                            value = {message}
                            required
                        />
                        
                        <button className={`btn-outline btn-big mb-4`} type="submit">Enviar</button>
                        
                    </form>   
                </div>
            </div>
        </section>
    )
}