
import {useState} from 'react'
import { ProgressBar} from 'react-bootstrap'
import axios from 'axios';
import Typed from 'react-typed';
import {Redes} from './Redes';

const API = process.env.REACT_APP_API

export const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [progress, setProgress] = useState(0)
    const [color] = useState('success')

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
                console.log(response.data.msg)
            }
    
        } catch(error){
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
                <div className="col-lg-4 col-md-6 mt-4 animate__animated animate__zoomIn">
                    <div className="row ml-auto">
                        <i className={`fas fa-map-marker-alt icons text-${color} mt-2`}></i>
                        <div className="ml-4">
                            <h5>Ubicación</h5>
                            <p>Cusco - Perú</p>
                        </div>
                    </div>
            
                    <div className="row mt-4 mb-4 ml-auto">
                        <i className={`fas fa-envelope-open-text icons text-${color} mt-2`}></i>
                        <div className="ml-4">
                            <h5>Correo</h5>
                            <p>freddylo_@hotmail.com</p>
                        </div>
                    </div>
            
                    <div className="row mb-5 ml-auto">
                        <i className={`fas fa-phone icons text-${color} mt-2`}></i>
                        <div className="ml-4">
                            <h5>Telefono</h5>
                            <p>+51 952 684 111</p>
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
                        <Redes/>
                    </div>
                    
                    <Bar/>   
    
                    <form onSubmit={sendMessage}>
                        <input 
                            className="control" 
                            type="text" 
                            placeholder="Ingrese su nombre" 
                            onChange={e => setName(e.target.value)}
                            value = {name}
                            required
                        />
                        <input 
                            className="control" 
                            type="email" 
                            placeholder="Ingrese su email" 
                            onChange={e => setEmail(e.target.value)}
                            value = {email}
                            required
                        />
                        <textarea 
                            className="control" 
                            placeholder="Escriba su mensaje" 
                            rows="4" 
                            onChange={e => setMessage(e.target.value)}
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