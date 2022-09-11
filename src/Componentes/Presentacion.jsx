import React from "react";
import './Presentacion.css'
import { BsLinkedin , BsGithub } from 'react-icons/bs';
import { IoRocketSharp } from 'react-icons/io5';
import SobreMi from "./SobreMi";
import foto from './../asses/Erika.PNG'

function Presentacion () {
    return(
        <div className="cuerpo container container-lg container-md container-sm" id="Inicio">
            <img src={foto} className="foto" alt="Erika Ladner"/>
            <div className="Inicio">
            <p className="intro"><IoRocketSharp />  BIENVENIDOS A MI PORTAFOLIO</p>
            <h1 className="titulo">ERIKA LADNER</h1>
            <h4 className="titulo">Futura Full Stack Developer</h4>
            <div className="botones">
                <a href="https://www.linkedin.com/in/erikaladner/" className="boton"><BsLinkedin /></a>
                <a href="https://github.com/erikalad" className="boton"><BsGithub /></a>
            </div>
            </div>
            <SobreMi />
        </div>
    )
}

export default Presentacion 