import Particles from 'react-particles-js';
import { useState, useEffect } from 'react'

export const ParticlesNasa = () => {

    const [nroPart, setNroPart] = useState(160)
    
    useEffect(()=> {
        if (window .innerWidth < 768)
            setNroPart(50)
        else
            setNroPart(160)
    })
    
    return(
        <Particles
            params={{
                "particles": {
                    "number": {
                        "value": nroPart,
                        "density": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "speed": 4,
                            "size_min": 0.3
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "random": true,
                        "speed": 1,
                        "direction": "top",
                        "out_mode": "out"
                    }
                },
            }}
        style={{
            width: '100%',
            height: '100%',
            position: 'fixed'
            }}  
        />
    )
}